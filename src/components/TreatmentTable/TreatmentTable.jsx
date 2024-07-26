import React, { useState } from 'react';
import styles from './TreatmentTable.module.css';
import mite from "../../assets/images/TR_TICK.svg";
import syringe from '../../assets/images/VACCINE.svg';
import worms from '../../assets/images/TR_WORMS.svg';
import {Link} from "react-router-dom";
import editImg from "assets/images/edit.svg"
import EditTreatmentModal from "components/Modal/EditTreatmentModal/EditTreatmentModal";

const TreatmentTable = () => {
    const data = [
        { icon: mite, name: 'Барс', date: '20.07.2023', frequency: '1 раз в 3 мес.' },
        { icon: syringe, name: 'Барс', date: '21.03.2022', frequency: '1 раз в 2 г.' },
        { icon: worms, name: 'Барс', date: '12.04.2023', frequency: '1 раз в 4 мес.' },
    ];
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
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <img src={item.icon} alt="icon" className={styles.icon}/>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.frequency}</td>
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
