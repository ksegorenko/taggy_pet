import auth from "../Auth/LoginOffer/LoginOffer.module.css";
import {Col, Container, Row} from "react-bootstrap";
import EditProfileForm from "../Forms/EditProfileForm/EditProfileForm";
import styles from "./EditeProfileOffer.module.css"

const EditProfileOffer = () => {
    return (
        <div className={auth.offer}>
            <Container>
                <Row>
                    <Col xs={11} sm={8} md={6} lg={5} xl={4} className={"mx-auto " + styles.window}>
                        <div className={auth.authorization_window}>
                            <div className={auth.title + ' ' + auth.elem_in_window}>
                                <h1 className={auth.h1}>Редактировать профиль</h1>
                            </div>
                            <EditProfileForm/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default EditProfileOffer;