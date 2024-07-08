import {Col} from "react-bootstrap";
import styles from "./PetInfo.module.css"
import PetInfoNavbar from "../../components/Navbars/PetInfoNavbar/PetInfoNavbar";
import PetInfoCard from "../../components/PetInfoCard/PetInfoCard";
import PetFeatures from "../../components/PetFeatures/PetFeatures";
import Contacts from "../../components/Contacts/Contacts";
import {useParams} from "react-router-dom";

const pet = {
    name: "Вобла",
    type: "Собака",
    breed: "Йоркширский терьер",
    sex: "Самец",
    stamp_id: "AAA123",
    chip_id: "123456789012345",
    imageUUIDName: "768c2b7b2ccdf2be2dc8b10546181d0b.jpg",
    features: [
        {
            description: "Не переносит кошачью шерсть",
            property_type: {
                property_id: 0,
                property_value: "Аллергия"
            }
        },
        {
            description: "Не переносит хозяина",
            property_type: {
                property_id: 1,
                property_value: "Другое"
            }
        },
        {
            description: "Очень любит огурцы",
            property_type: {
                property_id: 2,
                property_value: "Питание"
            }
        },
        {
            description: "Любит когда чешут за ушком",
            property_type: {
                property_id: 1,
                property_value: "Другое"
            }
        }
    ],
    users: [
        {
            first_name: "Александр",
            email: "osipov@osipov",
            phone_number: "89999999999",
            social_networks: [
                {
                    name: "VK",
                    base_url: "https://vk.com/",
                    short_name: "osipov"
                }
            ]

        }
    ]
}

const PetInfo = () => {
    const {searchParameter} = useParams()

    return (
        <div className={styles.white_background}>
            <header className={styles.nav}>
                <PetInfoNavbar/>
            </header>
            <div>
                <PetInfoCard data={pet}/>
            </div>
            {
                <div className={styles.features}>
                    <PetFeatures features={pet.features}/>
                </div>
            }
            {
                <div className={styles.contacts}>
                    <Contacts/>
                </div>
            }
        </div>
    );
}

export default PetInfo;