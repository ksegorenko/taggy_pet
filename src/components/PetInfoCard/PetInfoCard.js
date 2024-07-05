import {Col, Container, Row} from "react-bootstrap";
import styles from "./PetInfoCard.module.css"
import {useQueryClient} from "@tanstack/react-query";
import {usePetInfo} from "../../hooks/PetHooks";
import {useParams} from "react-router-dom";


const PetInfoCard = ({data}) => {
    console.log(data)
    return (
        <Container>
            <Row>
                <Col xs={11} sm={12} md={10} lg={8} xl={7} className={styles.pet_data_window + " mx-auto"}>
                    {data && (
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
                                         backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)), url(/images/pets/" + data.imageUUIDName + ")",
                                     }}>
                                    <div className={styles.pet_name}>
                                        <h4 id="pets-name">{data.name}</h4>
                                    </div>
                                </div>
                                <div className={styles.pet_data}>
                                    <table className={styles.pet}>
                                        <tr>
                                            <td className={styles.title_table}>Вид</td>
                                            <td className={styles.data_table}>{data.type}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title_table}>Порода</td>
                                            <td className={styles.data_table}>{data.breed}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title_table}>Пол</td>
                                            <td className={styles.data_table}>{data.sex === 'MALE' ? 'Самец' : 'Самка'}</td>
                                        </tr>

                                        { data.chip_id && (
                                            <tr>
                                                <td className={styles.title_table}>Чип</td>
                                                <td className={styles.data_table}>{data.chip_id}</td>
                                            </tr>
                                        )}

                                        { data.stamp_id && (
                                            <tr>
                                                <td className={styles.title_table}>Клеймо</td>
                                                <td className={styles.data_table}>{data.stamp_id}</td>
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