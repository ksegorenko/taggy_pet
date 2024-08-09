import { useState, useEffect, useRef } from "react";
import styles from "./Dropdown.module.css";
import tick from "assets/images/TR_TICK.svg";
import worms from "assets/images/TR_WORMS.svg";
import vaccine from "assets/images/VACCINE.svg";
import treatmentService from "services/TreatmentService.jsx";
import authenticationService from "services/AuthenticationService.jsx";
import {useNavigate} from "react-router-dom";

const Dropdown = ({ selected, setSelected, setMedications }) => {
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const options = [
        { id: 0, label: 'От клеща', imageUrl: tick },
        { id: 1, label: 'От глистов', imageUrl: worms },
        { id: 2, label: 'Вакцинация', imageUrl: vaccine }
    ];

    const selectedOption = options.find(option => option.label === selected);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsActive(false);
        }
    };

    const setMedicationsByPropertyId = (id) => {
        treatmentService.getMedicationsByPropertyId(id)
            .then(response => {
                setMedications(response?.data)
            })
            .catch(error => {
                if (error?.response?.status === 401) {
                    authenticationService.refreshToken()
                        .then(response => {
                            authenticationService.saveToken(response.data.access_token, response.data.refresh_token)
                            treatmentService.getMedicationsByPropertyId(id)
                                .then(response => {
                                    setMedications(response?.data)
                                })
                                .catch(() => {
                                    authenticationService.deleteTokens()
                                    navigate('/login')
                                })
                        })
                        .catch(() => {
                            authenticationService.deleteTokens()
                            navigate('/login')
                        })
                }
            })
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <div className={styles.dropdown_btn} onClick={() => setIsActive(!isActive)}>
                {selectedOption && <img src={selectedOption.imageUrl} alt={selectedOption.label} className={styles.dropdown_image} />}
                <span className={styles.select}></span>    
            </div>
            {isActive && (
                <div className={styles.dropdown_content}>
                    {options.map((option) => (
                        <div
                            key={option.label}
                            className={styles.dropdown_item}
                            onClick={() => {
                                setSelected(option.label);
                                setIsActive(false);
                                setMedicationsByPropertyId(option.id);
                            }}
                        >
                            <img src={option.imageUrl} alt={option.label} className={styles.dropdown_image} />
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
