import {Col, Container, Row} from "react-bootstrap";
import styles from "./PetFeatures.module.css"
import Feature from "./Feature/Feature";

const pet = {
    features: [
        {
            propertyType: {
                propertyValue: "Аллергия",
                propertyId: "1"
            },
            description: "Какое-то описание аллергии виаомва вармва вавмв"
        },
        {
            propertyType: {
                propertyValue: "Питание",
                propertyId: "2"
            },
            description: "Какое-то описание питания виаомва вармва вавмв"
        },
        {
            propertyType: {
                propertyValue: "Лекарства",
                propertyId: "3"
            },
            description: "Какое-то описание лекарств виаомва вармва вавмв"
        },
        {
            propertyType: {
                propertyValue: "Другое",
                propertyId: "4"
            },
            description: "Какое-то описание чего-то друго виаомва вармва вавмв"
        }
    ]
}

const PetFeatures = ({features}) => {


    return (
        <Container>
            <Row className={styles.features_header + " " + styles.display_none_mobile}>
                <Col xl={6}>
                    <h2>У этого питомца есть <span className={styles.features_orange}>особенности</span></h2>
                </Col>
            </Row>
            <Row className={styles.features_list}>
                {
                    features?.map((feature) => {
                        return <Feature feature={feature}/>
                    })
                }
            </Row>
        </Container>
    );
}

export default PetFeatures;