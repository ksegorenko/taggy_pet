import styles from "components/Modal/AddTreatmentModal/AddTreatmentModal.module.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Dropdown from "components/Dropdowns/Dropdown/Dropdown";
import saveImg from "assets/images/save.svg";

const EditTreatmentModal = ({ isOpen, onClose }) => {
    const drugs = ["Барс", "Нобивак Rabies", "Рабизин", "Рабиген Моно"];
    const timeUnits = ["дн.", "нед.", "мес.", "г."];
    const [frequencyNumber, setFrequencyNumber] = useState("");
    const [timeUnit, setTimeUnit] = useState(timeUnits[0]);
    const [selected, setSelected] = useState("");

    const handleNumberChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setFrequencyNumber(value);
        }
    };

    const handleTimeUnitChange = (event) => {
        setTimeUnit(event.target.value);
    };
    
    return (
        <>
            {isOpen && (
                <div className={styles.modal}>
                    <div className={styles.modal_wrapper}>
                        <div className={styles.modal_content}>
                            <div className={styles.modal_header}>
                                <h2 className={styles.modal_title}>Редактирование обработки</h2>
                                <div className={styles.close} id="pop-up-close" onClick={() => onClose()}>✕</div>
                            </div>
                            <div className={styles['table-container']}>
                                <table className={styles['resizable-table']}>
                                    <thead>
                                        <tr>
                                            <th>Тип обработки</th>
                                            <th>Препарат</th>
                                            <th>Дата последней обработки</th>
                                            <th>Частота обработок</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Dropdown selected={selected} setSelected={setSelected} />
                                            </td>
                                            <td>
                                                <select className={styles.select}>
                                                    {drugs.map((drug, index) => (
                                                        <option key={index} value={drug}>{drug}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td>
                                                <input type="date" className={styles.input} />
                                            </td>
                                            <td className={styles.frequencyInputContainer}>
                                                <span className={styles.frequencyText}>1 раз в</span>
                                                <input
                                                    type="text"
                                                    className={styles.numberInput}
                                                    value={frequencyNumber}
                                                    onChange={handleNumberChange}
                                                />
                                                <select className={styles.selectSmall} value={timeUnit} onChange={handleTimeUnitChange}>
                                                    {timeUnits.map((unit, index) => (
                                                        <option key={index} value={unit}>{unit}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td>
                                                <Link className={styles.save_icon}>
                                                    <img src={saveImg} alt="Save" />
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default EditTreatmentModal;