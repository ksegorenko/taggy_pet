import {Col} from "react-bootstrap";

import styles from "./ContactCard.module.css"
import SocialNetworkLink from "../../SocialNetworkLink/SocialNetworkLink";

const ContactCard = ({user}) => {
    return (
        <Col xs={"auto"} sm={"auto"} md={"auto"} lg={"auto"} xl={"auto"} className={styles.user_card}>
            <div className={styles.user_data}>
                <table className={styles.user}>
                    <tr>
                        <td className={styles.title_table}>Имя</td>
                        <td className={styles.data_table}>{user.firstName}</td>
                    </tr>
                    { user.phoneNumber != null &&
                        <tr>
                            <td className={styles.title_table}>Телефон</td>
                            <td className={styles.data_table}>{user.phoneNumber}</td>
                        </tr>
                    }
                    { user.email != null &&
                        <tr>
                            <td className={styles.title_table}>Email</td>
                            <td className={styles.data_table}>{user.email}</td>
                        </tr>
                    }
                </table>
                <div className={styles.social_networks_container}>
                    {
                        user.socialNetworks.map((network) => {
                            return <SocialNetworkLink socialNetwork={network}/>
                        })
                    }
                </div>
            </div>
        </Col>
    );
}

export default ContactCard;