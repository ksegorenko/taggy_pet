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
                        <td className={styles.data_table}>{user.first_name}</td>
                    </tr>
                    { user.phone_number != null &&
                        <tr>
                            <td className={styles.title_table}>Телефон</td>
                            <td className={styles.data_table}>{user.phone_number}</td>
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
                        user.social_networks.map((network) => {
                            return <SocialNetworkLink socialNetwork={network}/>
                        })
                    }
                </div>
            </div>
        </Col>
    );
}

export default ContactCard;