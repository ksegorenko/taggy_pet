import {Col, Container, Row} from "react-bootstrap";
import styles from "./Contacts.module.css"
import ContactCard from "./ContactCard/ContactCard";

const users = [
    {
        firstName: "Александр",
        email: "osipov@gmail.com",
        phoneNumber: "89134729304",
        socialNetworks: [
            {
                name: "VK",
                baseUrl: "https://vk.com/",
                shortName: "osipover"
            },
            {
                name: "TG",
                baseUrl: "https://telegram.me/",
                shortName: "osipover"
            },
        ]
    }
]

const Contacts = ({contacts}) => {
    return (
        <Container>
            <Row className={styles.contacts_header}>
                <Col xl={6}>
                    <h2>Свяжитесь с хозяевами</h2>
                </Col>
            </Row>
            <Row className={styles.contacts_cards}>
                {
                    contacts?.map((user) => {
                        return <ContactCard user={user}/>
                    })
                }
            </Row>
        </Container>
    );
}

export default Contacts;