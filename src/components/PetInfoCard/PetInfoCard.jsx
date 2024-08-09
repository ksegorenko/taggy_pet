import {Col, Container, Row} from "react-bootstrap";
import styles from "./PetInfoCard.module.css"
import * as Endpoint from "../../services/Endpoints"


const PetInfoCard = ({pet}) => {
    console.log(pet)
    return (
        <Container>
            <Row>
                <Col xs={11} sm={12} md={10} lg={8} xl={7} className={styles.pet_data_window + " mx-auto"}>
                    {pet && (
                        <>
                            <div className={styles.title + " " + styles.elem_in_window}>
                                <h1 className={styles.adaptive_header}>
                                    <span className={styles.normal_header}>Ура, питомец найден!</span>
                                    <span className={styles.narrow_screen_header}>Питомец найден!</span>
                                </h1>
                            </div>
                            <div className={styles.data_container + " " + styles.elem_in_window}>
                                <div className={styles.wrapper + " " + styles.pet_card} id="pet-card"
                                     style={{
                                         backgroundRepeat: "no-repeat",
                                         backgroundPosition: "center",
                                         backgroundSize: "cover",
                                         backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)), url(' + Endpoint.IMAGE_ENDPOINT + '/' + pet.pet_image?.image_uuid_name + ')',
                                     }}>
                                    <div className={styles.pet_name}>
                                        <h4 id="pets-name">{pet.name}</h4>
                                    </div>
                                </div>
                                <div className={styles.pet_data}>
                                    <table className={styles.pet}>
                                        <tr>
                                            <td className={styles.title_table}>Вид</td>
                                            <td className={styles.data_table}>{pet.type}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title_table}>Порода</td>
                                            <td className={styles.data_table}>{pet.breed}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title_table}>Пол</td>
                                            <td className={styles.data_table}>{pet.sex === 'MALE' ? 'Самец' : 'Самка'}</td>
                                        </tr>

                                        { pet.chip_id && (
                                            <tr>
                                                <td className={styles.title_table}>Чип</td>
                                                <td className={styles.data_table}>{pet.chip_id}</td>
                                            </tr>
                                        )}

                                        { pet.stamp_id && (
                                            <tr>
                                                <td className={styles.title_table}>Клеймо</td>
                                                <td className={styles.data_table}>{pet.stamp_id}</td>
                                            </tr>
                                        )}
                                    </table>
                                </div>
                            </div>
                        </>
                    )}
                </Col>

            </Row>
        </Container>
    );
}

export default PetInfoCard;
