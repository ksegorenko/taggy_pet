import {Col, Container, Row} from "react-bootstrap";
import styles from "./PetTreatments.module.css";
import substyles from "components/PetFeatures/PetFeatures.module.css";
import Treatment from "./Treatment/Treatment";

const pet = {
    treatments: [
        { 
            property: { 
                value: "VACCINE", 
                description: "Вакцинация" 
            }, 
            medication_name: "Рабизин", 
            date_of_last_treatment: "2024-06-06" 
        }, 
        { 
            property: { 
                value: "TR_TICK", 
                description: "Обработка от клеща" 
            }, 
            medication_name: "Бравекто", 
            date_of_last_treatment: "2024-07-14" 
        },
        { 
            property: { 
                value: "TR_WORMS", 
                description: "Обработка от глистов" 
            }, 
            medication_name: "Милпразон", 
            date_of_last_treatment: "2024-07-14" 
        }
    ]
}

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
                        <Col>
                            <Treatment treatment={treatment} />
                        </Col>
                    </Row>
                ))
            }
        </Container>
    );
}

export default PetTreatments;