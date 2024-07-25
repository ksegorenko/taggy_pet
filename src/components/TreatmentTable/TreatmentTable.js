import React from 'react';
import styles from './TreatmentTable.module.css';
import mite from '../../assets/TR_TICK.svg';
import syringe from '../../assets/VACCINE.svg';
import worms from '../../assets/TR_WORMS.svg';
import {Link} from "react-router-dom";

const TreatmentTable = () => {
    const data = [
        { icon: mite, name: 'Барс', date: '20.07.2023', frequency: '1 раз в 3 мес.' },
        { icon: syringe, name: 'Барс', date: '21.03.2022', frequency: '1 раз в 2 г.' },
        { icon: worms, name: 'Барс', date: '12.04.2023', frequency: '1 раз в 4 мес.' },
    ];

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
                                <Link className={styles.edit_icon}>
                                    <img src="/images/edit.svg" alt="Edit"/>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TreatmentTable;
