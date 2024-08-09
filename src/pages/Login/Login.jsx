import AuthNavbar from "../../components/Navbars/AuthNavbar/AuthNavbar";
import LoginOffer from "../../components/Auth/LoginOffer/LoginOffer";
import styles from "./Login.module.css"
import setBodyColor from "../../utils/setBodyColor";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {toast} from "react-toastify";

const Login = () => {
    setBodyColor({color : "#462446FF"})

    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.message) {
            toast.success(location.state.message);
        }
    }, [location]);


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