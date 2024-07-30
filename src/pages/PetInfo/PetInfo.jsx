/*import {Col} from "react-bootstrap";
import styles from "./PetInfo.module.css"
import PetInfoNavbar from "../../components/Navbars/PetInfoNavbar/PetInfoNavbar";
import PetInfoCard from "../../components/PetInfoCard/PetInfoCard";
import PetFeatures from "../../components/PetFeatures/PetFeatures";
import Contacts from "../../components/Contacts/Contacts";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import petService from "../../services/PetService";


const PetInfo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    if (!location.state || !location.state.pet) {
        navigate('/');
        return null;
    }

    const { pet } = location.state;

    return (
        <div className={styles.white_background}>
            <header className={styles.nav}>
                <PetInfoNavbar/>
            </header>
            <div>
                <PetInfoCard pet={pet}/>
            </div>
            { pet?.features?.length > 0 &&
                <div className={styles.features}>
                    <PetFeatures features={pet?.features}/>
                </div>
            }
            {
                <div className={styles.contacts}>
                    <Contacts contacts={pet?.users}/>
                </div>
            }
        </div>
    );
}

export default PetInfo;*/

import {Col} from "react-bootstrap";
import styles from "./PetInfo.module.css"
import PetInfoNavbar from "../../components/Navbars/PetInfoNavbar/PetInfoNavbar";
import PetInfoCard from "../../components/PetInfoCard/PetInfoCard";
import PetFeatures from "../../components/PetFeatures/PetFeatures";
import Contacts from "../../components/Contacts/Contacts";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import PetTreatments from "components/PetTreatments/PetTreatments";

const pet1 = {
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
    treatments: [ 
        { 
            property: { 
                value: "VACCINE", 
                description: "Вакцинация" 
            }, 
            medication_name: "Рабизин", 
            date_of_last_treatment: "2024-06-06" 
        }, 
        { 
            property: { 
                value: "TR_TICK", 
                description: "Обработка от клеща" 
            }, 
            medication_name: "Бравекто", 
            date_of_last_treatment: "2024-07-14" 
        },
        { 
            property: { 
                value: "TR_WORMS", 
                description: "Обработка от глистов" 
            }, 
            medication_name: "Милпразон", 
            date_of_last_treatment: "2024-07-14" 
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
    const location = useLocation();
    const navigate = useNavigate();
    if (!location.state || !location.state.pet) {
        navigate('/');
        return null;
    }

    const { pet } = location.state;

    return (
        <div className={styles.white_background}>
            <header className={styles.nav}>
                <PetInfoNavbar/>
            </header>
            <div>
                <PetInfoCard pet={pet}/>
            </div>
            { pet?.treatments?.length > 0 &&
                <div className={styles.features}>
                    <PetTreatments treatments={pet.treatments}/>
                </div>
            }
            { pet?.features?.length > 0 &&
                <div className={styles.features}>
                    <PetFeatures features={pet.features}/>
                </div>
            }
            {
                <div className={styles.contacts}>
                    <Contacts contacts={pet?.users}/>
                </div>
            }
        </div>
    );
}

export default PetInfo;
