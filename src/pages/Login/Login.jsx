import AuthNavbar from "../../components/Navbars/AuthNavbar/AuthNavbar";
import LoginOffer from "../../components/Auth/LoginOffer/LoginOffer";
import styles from "./Login.module.css"
import setBodyColor from "../../utils/setBodyColor";

const Login = () => {
    setBodyColor({color : "#462446FF"})
    return (
        <div className="purple-background">
            <header className="header">
                <AuthNavbar/>
            </header>
            <main>
                <LoginOffer/>
            </main>
        </div>
    );
}

export default Login;