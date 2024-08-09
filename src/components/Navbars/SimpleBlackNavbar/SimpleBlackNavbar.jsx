import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "../PetInfoNavbar/PetInfoNavbar.module.css";
import logoImg from "/src/assets/images/logo-black.svg";

const SimpleBlackNavbar = () => {
    return (
        <Container>
            <Row>
                <Col xs={4} sm={4} md={3} lg={2} xl={2}>
                    <Link to={"/"}>
                        <img src={logoImg} alt="Black Taggypet logo" className="logo"/>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default SimpleBlackNavbar;