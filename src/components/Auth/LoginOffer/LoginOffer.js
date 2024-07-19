import {Col, Container, Row} from "react-bootstrap";
import styles from "./LoginOffer.module.css"
import LoginForm from "../../Forms/LoginForm/LoginForm";
import {Link} from "react-router-dom";

const LoginOffer = () => {
    return (
        <div className={styles.offer}>
            <Container >
                <Row>
                    <Col xs={11} sm={8} md={6} lg={5} xl={4} className="mx-auto">
                        <div className={styles.authorization_window}>
                            <div className={styles.title + ' ' + styles.elem_in_window}>
                                <h1 className={styles.h1}>Авторизация</h1>
                            </div>
                            <LoginForm/>
                            <Link to={"/reset-password"} className={`${styles.remove_password_link} ${styles.elem_in_window} text-center`}>
                                Забыли пароль?
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LoginOffer;
