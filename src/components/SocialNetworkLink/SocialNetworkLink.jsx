import styles from "./SocialNetworkLink.module.css"
import {Link} from "react-router-dom";

const SocialNetworkLink = ({socialNetwork}) => {
    return (
        <div className={styles.social_network}>
            <Link to={socialNetwork.base_url + socialNetwork.short_name}>
                <img src={"/src/assets/images/icons/" + socialNetwork.name + ".svg"} alt="Link"/>
            </Link>
        </div>
    );
}

export default SocialNetworkLink;