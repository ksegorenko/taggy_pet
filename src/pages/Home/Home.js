import HomeNavbar from "../../components/Navbars/HomeNavbar/HomeNavbar";
import HomeOffer from "../../components/HomeOffer/HomeOffer";
import setBodyColor from "../../utils/setBodyColor";
import RecaptchaWarning from "../../components/RecaptchaWarning/RecaptchaWarning";
import "../../styles/General.css"

const Home = () => {
    // setBodyColor({color : "#462446FF"})
    return (
        <div className="purple-background">
            <header className="header">
                <HomeNavbar/>
            </header>
            <main>
                <HomeOffer/>
            </main>
        </div>
    );
}

export default Home;