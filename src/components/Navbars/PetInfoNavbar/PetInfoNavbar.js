import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import styles from "./PetInfoNavbar.module.css";

const PetInfoNavbar = () => {
    return (
        <Container>
            <Row>
                <Col xs={4} sm={4} md={3} lg={2} xl={2}>
                    <Link to={"/"}>
                        <img src="/images/logo-black.svg" alt="Black Taggypet logo" className="logo"/>
                    </Link>
                </Col>
                <Col xs={5} sm={5} md={4} lg={3} xl={3} className={styles.personal_cabinet_col}>
                    <h6 className={styles.pet_info_label}>Поиск питомца</h6>
                </Col>
            </Row>
        </Container>
    );
}

export default PetInfoNavbar;