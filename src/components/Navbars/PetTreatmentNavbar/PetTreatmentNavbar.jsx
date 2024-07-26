import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "../PersonalCabinetNavbar/PersonalCabinetNavbar.module.css";
import logoImg from "assets/images/logo-black.svg";

const PetTreatmentNavbar = () => {
    const navigate = useNavigate();

    const handleExit = (e) => {
        e.preventDefault();
        navigate('/user');
    }

    return (
        <Container>
            <Row>
                <Col xs={4} sm={4} md={3} lg={2} xl={2}>
                    <Link to={"/"}>
                        <img src={logoImg} alt="Black Taggypet logo" className="logo"/>
                    </Link>
                </Col>
                <Col xs={5} sm={5} md={4} lg={3} xl={3} className={styles.personal_cabinet_col}>
                    <h6 className={styles.personal_cabinet_label}>Обработки питомца</h6>
                </Col>
                <Col md={{ span: 1, offset: 2 }} lg={{ span: 1, offset: 4 }} xl={{ span: 1, offset: 5 }} className={styles.logout_col + " " + styles.display_none_md}>
                    <Link to={"#"} onClick={handleExit} className={styles.logout_btn}>Назад</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default PetTreatmentNavbar;