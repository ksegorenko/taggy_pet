import RegistrationNavbar from "../../components/Navbars/RegistrationNavbar/RegistrationNavbar";
import ResetPasswordOffer from "../../components/Auth/ResetPasswordOffer/ResetPasswordOffer";
import setBodyColor from "../../utils/setBodyColor";

const ResetPassword = () => {
    setBodyColor({color : "#462446FF"})
    return (
        <div className="purple-background">
            <header className="header">
                <RegistrationNavbar/>
            </header>
            <main>
                <ResetPasswordOffer/>
            </main>
        </div>
    );
}

export default ResetPassword;