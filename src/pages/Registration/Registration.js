import RegistrationNavbar from "../../components/Navbars/RegistrationNavbar/RegistrationNavbar";
import setBodyColor from "../../utils/setBodyColor";
import RegistrationOffer from "../../components/Auth/RegistrationOffer/RegistrationOffer";

const Registration = () => {
    setBodyColor({color : "#462446FF"})
    return (
        <div className="purple-background">
            <header className="header">
                <RegistrationNavbar/>
            </header>
            <main>
                <RegistrationOffer/>
            </main>
        </div>
    );
}

export default Registration;