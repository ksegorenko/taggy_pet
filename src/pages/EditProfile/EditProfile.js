import SimpleBlackNavbar from "../../components/Navbars/SimpleBlackNavbar/SimpleBlackNavbar";
import EditProfileOffer from "../../components/EditProfileOffer/EditProfileOffer";
import styles from "./EditProfile.module.css"

const EditProfile = () => {
    return (
        <div className={styles.gray_background}>
            <header className={styles.header}>
                <SimpleBlackNavbar/>
            </header>
            <main>
                <EditProfileOffer/>
            </main>
        </div>
    );
}

export default EditProfile;