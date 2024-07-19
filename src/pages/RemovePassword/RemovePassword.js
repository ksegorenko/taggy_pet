import RegistrationNavbar from "../../components/Navbars/RegistrationNavbar/RegistrationNavbar";
import RemovePasswordOffer from "../../components/Auth/RemovePasswordOffer/RemovePasswordOffer";
import setBodyColor from "../../utils/setBodyColor";

const RemovePassword = () => {
    setBodyColor({color : "#462446FF"})
    return (
        <div className="purple-background">
            <header className="header">
                <RegistrationNavbar/>
            </header>
            <main>
                <RemovePasswordOffer/>
            </main>
        </div>
    );
}

export default RemovePassword;