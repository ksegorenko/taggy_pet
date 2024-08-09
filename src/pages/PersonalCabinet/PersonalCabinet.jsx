import styles from "./PersonalCabinet.module.css"
import PersonalCabinetNavbar from "../../components/Navbars/PersonalCabinetNavbar/PersonalCabinetNavbar";
import UserData from "../../components/UserData/UserData"
import {Col, Container, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import PetCard from "../../components/PetCard/PetCard";
import authenticationService from "../../services/AuthenticationService";
import {useEffect, useState} from "react";
import userService from "../../services/UserService";
import persCabImg from "assets/images/pers-cab.png";

const PersonalCabinet = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})

    useEffect(() => {
        userService.getUserInfo()
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    authenticationService.refreshToken()
                        .then(response => {
                            authenticationService.saveToken(response.data.access_token, response.data.refresh_token)
                            userService.getUserInfo()
                                .then(response => {
                                    setUser(response.data)
                                })
                                .catch(error => {
                                    authenticationService.deleteTokens()
                                    navigate('/login')
                                })
                        })
                        .catch(error => {
                            authenticationService.deleteTokens()
                            navigate('/login')
                        })
                }
            })
    }, []);


    return (
        <div className={styles.white_background}>
            <header className={styles.nav}>
                <PersonalCabinetNavbar/>
            </header>
            <main>
                <Container>
                    <Row>
                        <UserData user={user}/>
                        <Col lg={{ span: 4, offset: 2}} xl={{ span: 1, offset: 1}} className={styles.picture_container}>
                            <img src={persCabImg} alt="Personal cabinet picture" className={styles.pers_cab_img}/>
                        </Col>
                    </Row>
                </Container>
            </main>
            <div className={styles.pets_list_header}>
                <Container>
                    <Row>
                        <Col xl={5}>
                            <ul>
                                <li className={styles.li + " " + styles.list_label}>Мои питомцы</li>
                                <li className={styles.li + " " + styles.display_none_mobile}>
                                    <Link to={"/pet/add"} className={styles.pet_list_btn}>
                                        + <span className={styles.add_label}>Добавить</span>
                                    </Link>
                                </li>
                                <li className={styles.li + " " + styles.mobile}>
                                    <Link to={"/pet/add"} className={styles.pet_list_btn}>
                                        +
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="pets-list">
                <Container>
                    <Row>
                        {
                            user.pets?.map((pet) => {
                                return <PetCard pet={pet}/>
                            })
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PersonalCabinet;