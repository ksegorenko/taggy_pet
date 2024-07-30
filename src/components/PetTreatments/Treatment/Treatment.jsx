import {Col} from "react-bootstrap";
import styles from "./Treatment.module.css";
import tickIcon from "assets/images/TR_TICK.svg";
import wormsIcon from "assets/images/TR_WORMS.svg";
import vacIcon from "assets/images/VACCINE.svg";

const treatmentIcons = {
    "Вакцинация": vacIcon,
    "Обработка от клеща": tickIcon,
    "Обработка от глистов": wormsIcon
};

const Treatment = ({treatment}) => {
    const icon = treatmentIcons[treatment.property.description];

    return (
        <Col xs={10} sm={6} md lg xl className={styles.treatment}>
             <div className={styles.header}>
                {icon && <img src={icon} alt={treatment.property.description} className={styles.icon} />}
                <h3>{treatment.property.description}</h3>
            </div>
            <p>
                <div className={styles.treatment_description}>Препарат: {treatment.medication_name}</div>
                <div className={styles.treatment_description}>Дата последней обработки: {treatment.date_of_last_treatment}</div>
            </p>
            <div></div>
        </Col>
    )
}

export default Treatment;