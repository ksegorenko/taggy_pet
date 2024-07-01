import {Col, Container, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

import styles from "./PersonalCabinetNavbar.module.css";
import Modal from "../../Modal/Modal";
import {useState} from "react";
import {useQueryClient} from "@tanstack/react-query";

const PersonalCabinetNavbar = () => {
    const [modalConfirmIsOpen, setModalConfirmOpen] = useState(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const handleLogout = (e) => {
        e.preventDefault()
        queryClient.removeQueries('user');
        navigate(`/`)
    }

    return (
        <Container>
            <Row>
                <Col xs={4} sm={4} md={3} lg={2} xl={2}>
                    <Link to={"/"}>
                        <img src="/images/logo-black.svg" alt="Black Taggypet logo" className="logo"/>
                    </Link>
                </Col>
                {/*<Col xs={5} sm={5} md={4} lg={3} xl={3} personal-cabinet-col display-none-sm>*/}
                <Col xs={5} sm={5} md={4} lg={3} xl={3} className={styles.personal_cabinet_col}>
                    <h6 className={styles.personal_cabinet_label}>Личный кабинет</h6>
                </Col>
                <Col className={"text-end " + styles.menu}>
                    <input type="checkbox" className={styles.burger}/>
                    <label htmlFor={styles.burger}></label>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"#"} onClick={e => handleLogout(e)} className={styles.logout_btn}>Выйти</Link>
                            </li>
                            <li>
                                <Link to="#" className="open_pop_up">Удалить аккаунт</Link>
                            </li>
                        </ul>
                    </nav>
                </Col>
                <Col md={{ span: 1, offset: 2 }} lg={{ span: 1, offset: 2 }} xl={{span: 1, offset: 3}} className={styles.logout_col + " " + styles.display_none_md}>
                    <Link to={"#"} onClick={e => handleLogout(e)} className={styles.logout_btn}>Выйти</Link>
                </Col>
                <Col lg={2} className={styles.display_none_md + " " + styles.delete_col}>
                    <Link to={"#"} className={styles.delete_link + " open_pop_up"} onClick={() => setModalConfirmOpen(true)}>
                        <h6 className={styles.delete_label}>Удалить аккаунт</h6>
                    </Link>
                </Col>
            </Row>
            <Modal isOpen={modalConfirmIsOpen} onClose={() => setModalConfirmOpen(false)}>
                <h2>Вы уверены?</h2>
                <p>Все ваши данные будут удалены вместе с информацией о питомцах.</p>
            </Modal>
        </Container>
    );
}

export default PersonalCabinetNavbar;