import {Col, Container, Row} from "react-bootstrap";
import styles from "./ResetPasswordOffer.module.css"
import ResetPasswordForm from "../../Forms/ResetPasswordForm/ResetPasswordForm";
import {Link} from "react-router-dom";

const ResetPasswordOffer = () => {
    return (
        <div className={styles.offer}>
            <Container >
                <Row>
                    <Col xs={11} sm={8} md={6} lg={5} xl={4} className="mx-auto">
                        <div className={styles.authorization_window}>
                            <div className={styles.title + ' ' + styles.elem_in_window}>
                                <h1 className={styles.h1}>Восстановление пароля</h1>
                            </div>
                            <ResetPasswordForm/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ResetPasswordOffer;