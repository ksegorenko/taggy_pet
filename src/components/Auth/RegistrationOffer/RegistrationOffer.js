import auth from "../LoginOffer/LoginOffer.module.css"
import {Col, Container, Row} from "react-bootstrap";
import styles from "../LoginOffer/LoginOffer.module.css";
import LoginForm from "../../Forms/LoginForm/LoginForm";
import {Link} from "react-router-dom";
import RegistrationForm from "../../Forms/RegistrationForm/RegistrationForm";

const RegistrationOffer = () => {
    return (
        <div className={auth.offer}>
            <Container>
                <Row>
                    <Col xs={11} sm={8} md={6} lg={5} xl={4} className="mx-auto">
                        <div className={auth.authorization_window}>
                            <div className={auth.title + ' ' + auth.elem_in_window}>
                                <h1 className={auth.h1}>Регистрация</h1>
                            </div>
                            <RegistrationForm/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RegistrationOffer;