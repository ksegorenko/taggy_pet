import {Col} from "react-bootstrap";
import styles from "./PetInfo.module.css"
import PetInfoNavbar from "../../components/Navbars/PetInfoNavbar/PetInfoNavbar";
import PetInfoCard from "../../components/PetInfoCard/PetInfoCard";
import PetFeatures from "../../components/PetFeatures/PetFeatures";
import Contacts from "../../components/Contacts/Contacts";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import petService from "../../services/PetService";


const PetInfo = () => {
    const location = useLocation();
    const [pet, setPet] = useState()
    const {searchParameter} = useParams()

    useEffect(() => {
        petService.getPetInfoBySearchParameter(searchParameter)
            .then(response => setPet(response.data))
            .catch(error => alert('К сожалению, в нашей базе нет информации об этом питомце'))
    }, []);

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

export default PetInfo;