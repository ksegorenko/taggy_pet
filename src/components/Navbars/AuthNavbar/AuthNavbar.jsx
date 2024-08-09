import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "../HomeNavbar/HomeNavbar.module.css";
import "../../../styles/General.css";
import substyles from "./AuthNavbar.module.css";
import logoImg from "/src/assets/images/logo-white.svg";

const AuthNavbar = () => {
    return (
        <Container>
            <Row className={styles.container}>
                <Col xs={3} md={3} xl={3}>
                    <Link to={"/"}>
                        <img src={logoImg} alt="Default Taggypet logo" className="logo"/>
                    </Link>
                </Col>
                <Col md={{ span: 2, offset: 3 }} lg={{ span: 2, offset: 5 }} xl={{ span: 2, offset: 6 }}>
                        <Link to={"/registration"} className={styles.registration_link}>
                            Зарегистрироваться
                        </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default AuthNavbar;