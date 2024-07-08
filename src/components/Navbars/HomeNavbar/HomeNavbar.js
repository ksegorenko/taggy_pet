import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "./HomeNavbar.module.css"
import "../../../styles/General.css"
import useAuth from "../../../hooks/AuthHook";
import {useQueryClient} from "@tanstack/react-query";
import authenticationService from "../../../services/AuthenticationService";

const HomeNavbar = () => {

    return (
        <Container>
            <Row className={styles.container}>
                <Col xs={3} md={3} xl={3}>
                    <Link to={"/"}>
                        <img src="/images/logo-white.svg" alt="Default Taggypet logo" className="logo"/>
                    </Link>
                </Col>
                {authenticationService.isUserAuthorized() ? (
                    <>
                        <Col className="text-end mobile_display_none">
                            <Link to={"/user"} className={styles.personal_cabinet__link}>
                                Личный кабинет
                            </Link>
                        </Col>
                        <Col className="text-end mobile_only">
                            <Link to={"/user"}>
                                <img src="/images/personal-cabinet-icon.svg"
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