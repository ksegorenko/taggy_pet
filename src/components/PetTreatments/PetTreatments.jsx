import {Col, Container, Row} from "react-bootstrap";
import styles from "./PetTreatments.module.css";
import substyles from "components/PetFeatures/PetFeatures.module.css";
import Treatment from "./Treatment/Treatment";

const PetTreatments = ({treatments}) => {
    return (
        <Container>
            <Row className={substyles.features_header + " " + substyles.display_none_mobile}>
                <Col>
                    <h2>Обработки питомца</h2>
                </Col>
            </Row>
            {
                treatments?.map((treatment, index) => (
                    <Row key={index} className={styles.features_list}>
                            <Treatment treatment={treatment} />
                    </Row>
                ))
            }
        </Container>
    );
}

export default PetTreatments;