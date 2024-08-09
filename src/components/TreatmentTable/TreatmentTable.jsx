import React, { useState } from 'react';
import styles from './TreatmentTable.module.css';
import {Link} from "react-router-dom";
import editImg from "assets/images/edit.svg"
import EditTreatmentModal from "components/Modal/EditTreatmentModal/EditTreatmentModal";
import vacIcon from "assets/images/VACCINE.svg";
import tickIcon from "assets/images/TR_TICK.svg";
import wormsIcon from "assets/images/TR_WORMS.svg";

const TreatmentTable = ({petId, treatments}) => {
    const units = {
        "DAYS": "дн.",
        "WEEKS": "нд.",
        "MONTHS": "мес.",
        "YEARS": "г."
    };

    const [treatmentId, setTreatmentId] = useState()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleOpenEditModal = (id) => {
        setTreatmentId(id)
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
                                1 раз в {treatment.treatment_frequency?.num_period} {units[treatment.treatment_frequency?.period_type]}
                            </td>
                            <td>
                                <Link to="#" onClick={() => handleOpenEditModal(treatment.id)} className={styles.edit_icon}>
                                    <img src={editImg} alt="Edit"/>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EditTreatmentModal petId={petId} treatmentId={treatmentId} isOpen={isEditModalOpen} onClose={handleCloseEditModal}/>
        </div>
    );
};

export default TreatmentTable;
