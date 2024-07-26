import editstyles from "../EditProfile/EditProfile.module.css";
import SimpleBlackNavbar from "../../components/Navbars/SimpleBlackNavbar/SimpleBlackNavbar";
import EditProfileOffer from "../../components/EditProfileOffer/EditProfileOffer";
import EditPetOffer from "../../components/EditPetOffer/EditPetOffer";

const EditPet = () => {
    return (
        <div className={editstyles.gray_background}>
            <header className={editstyles.header}>
                <SimpleBlackNavbar/>
            </header>
            <main>
                <EditPetOffer/>
            </main>
        </div>
    );
}

export default EditPet;