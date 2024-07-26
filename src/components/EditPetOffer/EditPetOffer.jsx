import auth from "../Auth/LoginOffer/LoginOffer.module.css";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../EditProfileOffer/EditeProfileOffer.module.css";
import pet_edit_styles from "./EditPetOffer.module.css"
import EditPetForm from "../Forms/EditPetForm/EditPetForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../Modal/Modal";

const EditPetOffer = () => {
    const [modalConfirmIsOpen, setModalConfirmOpen] = useState(false);

    return (
        <div className={auth.offer + ' ' + styles.offer}>
            <Container>
                <Row className={styles.row}>
                    <Col xs={11} sm={8} md={6} lg={5} xl={4} className={"mx-auto " + styles.window}>
                        <div className={auth.authorization_window}>
                            <div className={auth.title + ' ' + auth.elem_in_window}>
                                <h1 className={auth.h1}>Редактировать карточку питомца</h1>
                            </div>
                            <EditPetForm />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default EditPetOffer;
