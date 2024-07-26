import { useState, useEffect, useRef } from "react";
import styles from "./Dropdown.module.css";
import tick from "assets/images/TR_TICK.svg";
import worms from "assets/images/TR_WORMS.svg";
import vaccine from "assets/images/VACCINE.svg";

const Dropdown = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef(null);

    const options = [
        { label: 'От клеща', imageUrl: tick },
        { label: 'От глистов', imageUrl: worms },
        { label: 'Вакцинация', imageUrl: vaccine }
    ];

    const selectedOption = options.find(option => option.label === selected);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsActive(false);
        }
    };

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
