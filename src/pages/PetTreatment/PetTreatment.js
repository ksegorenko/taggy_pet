import styles from "./PetTreatment.module.css"
import PetTreatmentNavbar from "../../components/Navbars/PetTreatmentNavbar/PetTreatmentNavbar"
import { useNavigate, Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

const PetTreatment = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.white_background}>
            <header className={styles.nav}>
                <PetTreatmentNavbar/>
            </header>
            <main>
                <Container>
                    <Row>
                        <Col lg={6} xl={6}>
                            <p className={styles.list_label}>
                                Обработки питомца
                            </p>
                            <Link className={styles.add_btn}>
                                + <span className={styles.add_label}>Добавить обработку</span>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
        
    )
}

export default PetTreatment;