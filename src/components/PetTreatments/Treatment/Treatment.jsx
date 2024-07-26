import {Col} from "react-bootstrap";
import styles from "./Treatment.module.css";

const Treatment = ({treatment}) => {
    return (
        <Col xs={10} sm={6} md lg xl className={styles.treatment}>
            <h3>{treatment.property.description}</h3>
            <p className={styles.treatment_description}>{treatment.medication_name}</p>
            <p className={styles.treatment_description}>{treatment.date_of_last_treatment}</p>
        </Col>
    )
}