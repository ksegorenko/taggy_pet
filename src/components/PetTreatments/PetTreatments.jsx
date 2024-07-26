import {Col, Container, Row} from "react-bootstrap";
import styles from "./PetTreatment.module.css";
import substyles from "components/PetFeatures/PetFeatures.module.css";

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

const PetTreatment = ({treatments}) => {
    return (
        <Container>
            <Row className={substyles.features_header + " " + substyles.display_none_mobile}>
                <Col>
                    <h2>Обработки питомца</h2>
                </Col>
            </Row>
            <Row className={styles.features_list}>
                {
                    treatments?.map((treatment) => {
                        return <Treatment treatment={treatment}/>
                    })
                }
            </Row>
        </Container>
    );
}

export default PetTreatment;