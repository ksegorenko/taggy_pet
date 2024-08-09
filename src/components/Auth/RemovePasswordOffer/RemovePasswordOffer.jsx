import {Col, Container, Row} from "react-bootstrap";
import styles from "./RemovePasswordOffer.module.css"
import RemovePasswordForm from "../../Forms/RemovePasswordForm/RemovePasswordForm";
import {Link} from "react-router-dom";

const RemovePasswordOffer = () => {
    return (
        <div className={styles.offer}>
            <Container >
                <Row>
                    <Col xs={11} sm={8} md={6} lg={5} xl={5} className={"mx-auto" + ' ' + styles.form}>
                        <div className={styles.authorization_window}>
                            <div className={styles.title + ' ' + styles.elem_in_window}>
                                <h1 className={styles.h1}>Восстановление пароля</h1>
                            </div>
                            <RemovePasswordForm/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RemovePasswordOffer;