import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "./HomeNavbar.module.css"
import "../../../styles/General.css"
import authenticationService from "../../../services/AuthenticationService";
import logoImg from '/src/assets/images/logo-white.svg';
import cabIcon from '/src/assets/images/personal-cabinet-icon.svg'


const HomeNavbar = () => {

    return (
        <Container>
            <Row className={styles.container}>
                <Col xs={3} md={3} xl={3}>
                    <Link to={"/"}>
                        <img src={logoImg} alt="Default Taggypet logo" className="logo"/>
                    </Link>
                </Col>
                {authenticationService.isAuthorized() ? (
                    <>
                        <Col className="text-end mobile_display_none">
                            <Link to={"/user"} className={styles.personal_cabinet__link}>
                                Личный кабинет
                            </Link>
                        </Col>
                        <Col className="text-end mobile_only">
                            <Link to={"/user"}>
                                <img src={cabIcon}
                                     alt="Interractive icon for personal cabinet"
                                     className={styles.personal_cabinet__icon}/>
                            </Link>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col md={{ span: 2, offset: 3 }} lg={{ span: 2, offset: 4 }} xl={{ span: 2, offset: 5 }} className="small_display_none mobile_display_none">
                            <Link to={"/registration"} className={styles.registration_link}>
                                Зарегистрироваться
                            </Link>
                        </Col>
                        <Col className="text-end">
                            <Link to={"/login"} className={styles.login_link}>
                                Войти
                            </Link>
                        </Col>
                    </>
                )}
            </Row>
        </Container>
    );
}

export default HomeNavbar;