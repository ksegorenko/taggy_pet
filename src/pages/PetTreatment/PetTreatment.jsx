import React, {useEffect, useState} from 'react';
import styles from "./PetTreatment.module.css";
import PetTreatmentNavbar from "../../components/Navbars/PetTreatmentNavbar/PetTreatmentNavbar";
import {useNavigate, Link, useParams} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import TreatmentTable from '../../components/TreatmentTable/TreatmentTable';
import AddTreatmentModal from '../../components/Modal/AddTreatmentModal/AddTreatmentModal.jsx';
import petService from "services/PetService.jsx";
import authenticationService from "services/AuthenticationService.jsx";

const PetTreatment = () => {
    const {petId} = useParams()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [treatments, setTreatments] = useState([]);
    const navigate = useNavigate();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        petService.getTreatmentsByPetId(petId)
            .then(response => {
                setTreatments(response.data)
                console.log(treatments)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    authenticationService.refreshToken()
                        .then(response => {
                            authenticationService.saveToken(response.data.access_token, response.data.refresh_token)
                            petService.getTreatmentsByPetId(petId)
                                .then(response => {
                                    setTreatments(response.data)
                                })
                                .catch(() => {
                                    authenticationService.deleteTokens()
                                    navigate('/login')
                                })
                        })
                        .catch(() => {
                            authenticationService.deleteTokens()
                            navigate('/login')
                        })
                }
            })
    }, []);

    return (
        <div className={styles.white_background}>
            <header className={styles.nav}>
                <PetTreatmentNavbar />
            </header>
            <main>
                <Container>
                    <Row>
                        <Col lg={6} xl={6}>
                            <p className={styles.list_label}>
                                Обработки питомца
                            </p>
                            <Link to="#" onClick={handleOpenModal} className={styles.add_btn}>
                                + <span className={styles.add_label}>Добавить обработку</span>
                            </Link>
                        </Col>
                    </Row>
                    { treatments.length > 0
                        ? <TreatmentTable petId={petId} treatments={treatments}/>
                        : <h3 className={styles.h5}>Обработок нет. Добавим?</h3>
                    }
                </Container>
                <AddTreatmentModal petId={petId} isOpen={isModalOpen} onClose={handleCloseModal}/>
            </main>
        </div>
    );
}

export default PetTreatment;
