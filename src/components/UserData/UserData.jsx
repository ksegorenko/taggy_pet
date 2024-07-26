import {Col} from "react-bootstrap";
import styles from "./UserData.module.css"
import {Link} from "react-router-dom";
import editIconImg from "assets/images/edit.svg"

const UserData = ({user}) => {
    return (
        <Col lg={6} xl={6}>
            <div className={styles.header_user_data}>
                <ul>
                    <li className={styles.list_label}>
                        Мои данные
                    </li>
                    <li>
                        <Link to={"/user/edit"} className={styles.edit_icon}>
                            <img src={editIconImg} alt="Edit"/>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.user_data}>
                <table>
                    <tr>
                        <td className={styles.title}>Имя</td>
                        <td className={styles.data}>{user.first_name}</td>
                    </tr>
                    <tr>
                        <td className={styles.title}>Телефон</td>
                        <td className={styles.data}>{user.phone_number}</td>
                    </tr>
                    <tr>
                        <td className={styles.title}>Email</td>
                        <td className={styles.data}>{user.email}</td>
                    </tr>
                    {
                        user.social_networks?.map((network) => {
                            return (
                                <tr>
                                    <td className={styles.title + " " + styles.social_network_logo}>
                                        <img src={"/images/icons/" + network.name + ".svg"}  alt="Social network logo" className={styles.social_network_logo}/>
                                    </td>
                                    <td className={styles.data}>{network.login}</td>
                                </tr>
                            );
                        })
                    }
                </table>
            </div>
        </Col>
    );
}

export default UserData;