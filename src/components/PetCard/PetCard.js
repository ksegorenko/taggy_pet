import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "./PetCard.module.css";


const PetCard = ({pet}) => {

    return (
        <Col xs={11} sm={6} md={6} lg={4} xl={4} className={styles.md + " " + styles.col11}>
            <Link to={'/pet/edit/' + pet?.pet_id} >
                <div className={styles.wrapper + " " + styles.pet_card}
                    style={{background: pet.pet_image.image_uuid_name === "default-pet-image.png"
                            ? "url('http://localhost:8080/api/v1/pet/images/" + pet.pet_image.image_uuid_name + "')"
                            : "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)), url('http://localhost:8080/api/v1/pet/images/" + pet.pet_image.image_uuid_name + "')"}}>
                    <div className={styles.pet_name}>
                        <h5>{pet.name}</h5>
                    </div>
                </div>
            </Link>
        </Col>
    );
}

export default PetCard;