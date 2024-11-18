import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import styles from "./PersonalCabinetNavbar.module.css";
import Modal from "../../Modal/Modal";
import userService from "../../../services/UserService";
import authenticationService from "../../../services/AuthenticationService";
import petService from "../../../services/PetService";
import logoImg from "assets/images/logo-black.svg";

const PersonalCabinetNavbar = () => {
    const [modalConfirmIsOpen, setModalConfirmOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        authenticationService.logout();
        navigate(`/`);
    }

    const deleteUser = () => {
        userService.deleteUser()
            .then(response => {
                authenticationService.deleteTokens();
                navigate('/');
            })
            .catch(error => {
                if (error.response.status === 401) {
                    authenticationService.refreshToken()
                        .then(response => {
                            authenticationService.saveToken(response.data.access_token, response.data.refresh_token);
                            userService.deleteUser()
                                .then(response => {
                                    authenticationService.deleteTokens();
                                    navigate('/');
                                })
                                .catch(error => {
                                    authenticationService.deleteTokens();
                                    navigate('/login');
                                });
                        })
                        .catch(error => {
                            authenticationService.deleteTokens();
                            navigate('/login');
                        });
                }
            });
    }

    return (
        <Container>
            <Row>
                <Col xs={4} sm={4} md={3} lg={2} xl={2}>
                    <Link to={"/"}>
                        <img src={logoImg} alt="Black Taggypet logo" className="logo" />
                    </Link>
                </Col>
                <Col xs={5} sm={5} md={4} lg={3} xl={3} className={styles.personal_cabinet_col}>
                    <h6 className={styles.personal_cabinet_label}>Личный кабинет</h6>
                </Col>
                <Col className={"text-end " + styles.menu}>
                    <div className={styles.dropdown}>
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className={styles.dropdown_btn}>
                            ☰
                        </button>
                        {dropdownOpen && (
                            <div className={styles.dropdown_content}>
                                <Link to={"#"} onClick={handleLogout} className={styles.dropdown_btn_link}>Выйти</Link>
                                <Link to={"#"} onClick={() => setModalConfirmOpen(true)} className={styles.dropdown_btn_link}>Удалить аккаунт</Link>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
            <Modal isOpen={modalConfirmIsOpen} onClose={() => setModalConfirmOpen(false)} onDelete={deleteUser}>
                <h2>Вы уверены?</h2>
                <p>Все ваши данные будут удалены вместе с информацией о питомцах.</p>
            </Modal>
        </Container>
    );
}

export default PersonalCabinetNavbar;
