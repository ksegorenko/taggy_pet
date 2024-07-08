import auth from "../Auth/LoginOffer/LoginOffer.module.css";
import {Col, Container, Row} from "react-bootstrap";
import styles from "../EditProfileOffer/EditeProfileOffer.module.css";
import PetCreationForm from "../Forms/PetCreationForm/PetCreationForm";

const PetCreationOffer = () => {
    return (
        <div className={auth.offer}>
            <Container>
                <Row>
                    <Col xs={11} sm={8} md={6} lg={5} xl={4} className={"mx-auto " + styles.window}>
                        <div className={auth.authorization_window}>
                            <div className={auth.title + ' ' + auth.elem_in_window}>
                                <h1 className={auth.h1}>Добавить питомца</h1>
                            </div>
                            <PetCreationForm/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PetCreationOffer;