import { useState } from "react";
import styles from "./Dropdown.module.css";
import tick from '../../assets/TR_TICK.svg';

const Dropdown = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const options = [
        { label: 'От клеща', imageUrl: {tick} },
        { label: 'От глистов', imageUrl: '../../assets/TR_WORMS.svg' },
        { label: 'Вакцинация', imageUrl: '../../assets/VACCINE.svg' }
    ];

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_btn} onClick={e => setIsActive(!isActive)}>
                {selected}
                <span className={styles.select}></span>    
            </div>
            {isActive && (
                <div className={styles.dropdown_content}>
                    {options.map((option) => (<div key={option.imageUrl}>

                        <img 
                                onClick={(e) => {
                                    setSelected(option.label);
                                    setIsActive(false);
                                }}
                            /*className={styles.dropdown_item}*/
                            src={option.imageUrl} alt={option.label} className={styles.dropdown_image} 
                            />
                            {option.label}
                            {console.log(option.imageUrl)}
                    </div>    
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
