import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "../HomeNavbar/HomeNavbar.module.css";
import "../../../styles/General.css";
import logoImg from "/src/assets/images/logo-white.svg";

const RegistrationNavbar = () => {
    return (
        <Container>
            <Row className={styles.container}>
                <Col xs={3} md={3} xl={3}>
                    <Link to={"/"}>
                        <img src={logoImg} alt="Default Taggypet logo" className="logo"/>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default RegistrationNavbar;