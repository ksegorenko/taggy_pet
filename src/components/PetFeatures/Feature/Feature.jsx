import {Col} from "react-bootstrap";
import styles from "./Feature.module.css"


const Feature = ({feature}) => {
    return (
        <Col xs={10} sm={6} md lg xl className={styles.feature}>
            <h3>{feature.property_type.property_value}</h3>
            <p className={styles.feature_description}>{feature.description}</p>
        </Col>
    );
}

export default Feature;