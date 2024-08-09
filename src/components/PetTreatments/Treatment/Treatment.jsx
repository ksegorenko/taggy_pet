import {Col} from "react-bootstrap";
import styles from "./Treatment.module.css";
import tickIcon from "assets/images/TR_TICK.svg";
import wormsIcon from "assets/images/TR_WORMS.svg";
import vacIcon from "assets/images/VACCINE.svg";

const treatmentIcons = {
    "VACCINE": vacIcon,
    "TR_TICK": tickIcon,
    "TR_WORMS": wormsIcon
};

const Treatment = ({treatment}) => {
    const icon = treatmentIcons[treatment?.property?.value];

    return (
        <Col xs={10} sm={6} md lg xl={6} className={styles.treatment}>
             <div className={styles.header}>
                {icon && <img src={icon} alt={treatment?.property?.value} className={styles.icon} />}
                <h3>{treatment?.property?.description}</h3>
            </div>
            <p>
                <div className={styles.treatment_description}>Препарат: {treatment?.medication_name}</div>
                <div className={styles.treatment_description}>Дата последней обработки: {treatment?.date_of_last_treatment}</div>
            </p>
            <div></div>
        </Col>
    )
}

export default Treatment;