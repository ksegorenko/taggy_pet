import React, { useState } from 'react';
import styles from './TreatmentTable.module.css';
import mite from "../../assets/images/TR_TICK.svg";
import syringe from '../../assets/images/VACCINE.svg';
import worms from '../../assets/images/TR_WORMS.svg';
import {Link} from "react-router-dom";
import editImg from "assets/images/edit.svg"
import EditTreatmentModal from "components/Modal/EditTreatmentModal/EditTreatmentModal";

const TreatmentTable = ({treatments}) => {
    const unitMap = [
        { key: 'DAYS', value: 'дн.' },
        { key: 'WEEKS', value: 'нд.' },
        { key: 'MONTHS', value: 'мес.' },
        { key: 'YEARS', value: 'г.' }
    ];


    const data = [
        { icon: mite, name: 'Барс', date: '20.07.2023', frequency: '1 раз в 3 мес.' },
        { icon: syringe, name: 'Барс', date: '21.03.2022', frequency: '1 раз в 2 г.' },
        { icon: worms, name: 'Барс', date: '12.04.2023', frequency: '1 раз в 4 мес.' },
    ];

    const get = (key) => {
        let value = null
        unitMap.map(unit => {
            if (key === unit.key) {
                value = unit.value
            }
        })
        return value
    }


    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleOpenEditModal = () => {
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    return (
        <div className={styles['table-container']}>
            <table className={styles['resizable-table']}>
                <thead>
                    <tr>
                        <th>Тип обработки</th>
                        <th>Препарат</th>
                        <th>Дата последней обработки</th>
                        <th>Частота обработок</th>
                    </tr>
                </thead>
                <tbody>
                    {treatments?.map((treatment, index) => (
                        <tr key={index}>
                            <td>
                                <img src={"/src/assets/images/" + treatment.property_name + ".svg"} alt="icon" className={styles.icon}/>
                            </td>
                            <td>{treatment.medication_name}</td>
                            <td>{treatment.date_of_last_treatment}</td>
                            <td>
                                1 раз в {treatment.treatment_frequency?.num_period} {get(treatment?.treatment_frequency?.period_type)}
                            </td>
                            <td>
                                <Link to="#" onClick={handleOpenEditModal} className={styles.edit_icon}>
                                    <img src={editImg} alt="Edit"/>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EditTreatmentModal isOpen={isEditModalOpen} onClose={handleCloseEditModal}/>
        </div>
    );
};

export default TreatmentTable;
