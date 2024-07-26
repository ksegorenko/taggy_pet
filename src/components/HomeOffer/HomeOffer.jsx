import {Col, Container, Row} from "react-bootstrap";
import PetSearchForm from "../Forms/PetSearchForm/PetSearchForm";
import styles from "./HomeOffer.module.css";
import dogImg from "assets/images/dog-picture.png"

const HomeOffer = () => {
    return (
        <Container>
            <Row>
                <Col sm={6} md={6} xl={8}>
                    <div className={styles.text + ' ' + styles.mobile_display_none}>
                        <h1>Поможем</h1>
                        <h1>потерянному</h1>
                        <h1>питомцу</h1>
                        <h1>вернуться</h1>
                        <h1>домой</h1>
                    </div>
                    <div className={styles.search_container}>
                        <h2>Нашли питомца с чипом или клеймом?</h2>
                        <PetSearchForm/>
                    </div>
                </Col>
                <Col sm={4} md={6} xl={4} className={"text-end " + styles.mobile_display_none}>
                    <img src={dogImg} alt="Dog picture" className={styles.dog_picture}/>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeOffer;