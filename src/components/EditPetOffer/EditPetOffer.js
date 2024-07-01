import auth from "../Auth/LoginOffer/LoginOffer.module.css";
import {Col, Container, Row} from "react-bootstrap";
import styles from "../EditProfileOffer/EditeProfileOffer.module.css";
import EditPetForm from "../Forms/EditPetForm/EditPetForm";
import {Link} from "react-router-dom";
import {useState} from "react";
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
                            <EditPetForm/>
                        </div>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1} className={styles.delete_container}>
                        <Link to={"#"} className={styles.delete_link + " open_pop_up"} onClick={() => setModalConfirmOpen(true)}>
                            <img src="/images/trash.svg" alt="Delete button"/>
                        </Link>
                    </Col>
                </Row>
                <Modal isOpen={modalConfirmIsOpen} onClose={() => setModalConfirmOpen(false)}>
                    <h2>Вы уверены?</h2>
                    <p>Все данные о питомце будут удалены и в случае его пропажи люди не смогут связаться с Вами через наш сервис.</p>
                </Modal>
            </Container>
        </div>
    );
}

export default EditPetOffer;