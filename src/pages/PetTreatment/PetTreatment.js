import React, { useState } from 'react';
import styles from "./PetTreatment.module.css";
import PetTreatmentNavbar from "../../components/Navbars/PetTreatmentNavbar/PetTreatmentNavbar";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import TreatmentTable from '../../components/TreatmentTable/TreatmentTable';
import AddTreatmentModal from '../../components/Modal/AddTreatmentModal/AddTreatmentModal.js';

const PetTreatment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                    <TreatmentTable />
                </Container>
                <AddTreatmentModal isOpen={isModalOpen} onClose={handleCloseModal}>
                    {/* Здесь можно разместить дополнительные элементы, если необходимо */}
                </AddTreatmentModal>
            </main>
        </div>
    );
}

export default PetTreatment;
