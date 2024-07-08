import styles from "./PetCreation.module.css"
import SimpleBlackNavbar from "../../components/Navbars/SimpleBlackNavbar/SimpleBlackNavbar";
import PetCreationOffer from "../../components/PetCreationOffer/PetCreationOffer";

const PetCreation = () => {
    return (
        <div className={styles.orange_background}>
            <header className={styles.header}>
                <SimpleBlackNavbar/>
            </header>
            <main>
                <PetCreationOffer/>
            </main>
        </div>
    );
}

export default PetCreation;