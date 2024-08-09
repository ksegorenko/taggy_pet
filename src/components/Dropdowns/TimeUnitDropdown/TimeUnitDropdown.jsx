import { useState, useEffect, useRef } from "react";
import styles from "./TimeUnitDropdown.module.css";

const TimeUnitDropdown = ({ selected, setSelected, options }) => {
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef(null);

    const selectedOption = options.find(option => option === selected);

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
                {selectedOption}
                <span className={styles.select}></span>    
            </div>
            {isActive && (
                <div className={styles.dropdown_content}>
                    {options.map((option) => (
                        <div
                            key={option}
                            className={styles.dropdown_item}
                            onClick={() => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TimeUnitDropdown;
