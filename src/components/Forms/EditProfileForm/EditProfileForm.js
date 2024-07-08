import {useState} from "react";
import phoneValidate from "../../../utils/phoneValidate";
import formstyles from "../LoginForm/LoginForm.module.css";
import styles from "../RegistrationForm/RegistrationForm.module.css";
import editstyles from "./EditProfileForm.module.css"
import Modal from "../../Modal/Modal";

const user = {
    name: "Александр",
    email: "alexander@alexander",
    phone: "8 (888) 888-8888",
    emailPermit: true,
    phonePermit: false,
    password: "password",
    networks: [
        {
            propertyId: 0,
            propertyValue: "VK",
            shortName: "vkalexander"
        },
        {
            propertyId: 1,
            propertyValue: "TG",
            shortName: "tgalexander"
        },
        {
            propertyId: 2,
            propertyValue: "OK",
            shortName: ""
        },
    ]
}

const EditProfileForm = () => {
    const [regData, setRegData] = useState({
        name: '',
        email: '',
        phone: '',
        emailPermit: '',
        phonePermit: '',
        password: '',
        logins: { }
    })

    const [confirmPassword, setConfirmPassword] = useState('');
    const [logins, setLogins] = useState('')

    const update = e => {
        const target = e.currentTarget;
        let value = (target.type === 'checkbox' ? target.checked : target.value);

        if (target.name === 'phone') {
            value = phoneValidate(e);
        }

        setRegData({
            ...regData,
            [target.name]: value
        });
    }

    const updateNetwork = e => {
        const target = e.target;
        setLogins(prevLogins => ({
            ...prevLogins,
            [target.name]: target.value
        }));
    }

    const [modalConfirmIsOpen, setModalConfirmOpen] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(regData);
        if (regData.password !== confirmPassword) {
            let confirmPasswordField = document.getElementById("confirmPassword");
            confirmPasswordField.style.borderColor="#f81d1d";
            confirmPasswordField.style.backgroundColor="rgb(253 90 90 / 11%)";
            confirmPasswordField.value = "";
            confirmPasswordField.setAttribute("placeholder", "Пароль не совпадает")
        }

    }

    const handleDelete = () => {
        setModalConfirmOpen(true);
    };

    return (
        <div className={formstyles.form_container}>
            <form action="" className={formstyles.form}>
                <label htmlFor="firstName">Имя</label>
                <input className={editstyles.input + ' ' + formstyles.elem_in_window}
                       id="firstName"
                       type="text"
                       placeholder="Имя"
                       required
                       value={user.name}
                       name="name"
                       onChange={update}
                />
                <label htmlFor="email">Email</label>
                <input className={editstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Email"
                       required
                       value={user.email}
                       id="email"
                       name="email"
                       onChange={update}
                />
                <label htmlFor="phone">Телефон</label>
                <input className={editstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Телефон"
                       required
                       value={user.phone}
                       id="phone"
                       name="phone"
                       onChange={update}
                />

                <h5 className={styles.h5}>Разрешаю показывать контакты</h5>
                <div className={styles.checkboxes}>
                    <label>
                        <input type="checkbox" name="emailPermit" checked={user.emailPermit} onChange={update} className={styles.real_checkbox}/>
                        <span className={styles.custom_checkbox}></span>
                        email
                    </label>
                    <label>
                        <input type="checkbox" id="phone" name="phonePermit" checked={user.phonePermit} onChange={update} className={styles.real_checkbox}/>
                        <span className={styles.custom_checkbox}></span>
                        телефон
                    </label>
                </div>
                <label htmlFor="new_password">Новый пароль</label>
                <input className={editstyles.input + ' ' + formstyles.elem_in_window}
                       type="password"
                       placeholder="Пароль"
                       id="new_password"
                       required
                       name="password"
                       onChange={update}
                />
                <label htmlFor="confirmPassword">Введите новый пароль еще раз</label>
                <input className={editstyles.input + ' ' + formstyles.elem_in_window}
                       type="password"
                       placeholder="Повторите пароль"
                       required
                       id="confirmPassword"
                       onChange={e => {setConfirmPassword(e.currentTarget.value)}}
                />
                <div className={editstyles.social_networks_container}>
                    {
                        user.networks.map((network) => {
                            return (
                                <div className={editstyles.social_network}>
                                    <img src={`/images/icons/${network.propertyValue}.svg`} alt="Logo" className={styles.social_network_logo}/>
                                    <input className={editstyles.input}
                                           type="text"
                                           placeholder="Логин"
                                           name={network.propertyValue}
                                           value={network.shortName}
                                           onChange={updateNetwork}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <button className={formstyles.button + ' ' + formstyles.elem_in_window + ' ' + editstyles.button}
                        type="submit"
                        onClick={handleSubmit}>
                    Подтвердить изменения
                </button>
                <button className={`${formstyles.button} ${formstyles.elem_in_window} ${styles.delete_button}`}
                    type="button"
                    onClick={handleDelete}>
                    Удалить аккаунт
                </button>
            </form>
            <Modal isOpen={modalConfirmIsOpen} onClose={() => setModalConfirmOpen(false)}>
                    <h2>Вы уверены?</h2>
                    <p>Все данные о Вас и Вашем питомце будут удалены и в случае его пропажи люди не смогут связаться с Вами через наш сервис.</p>
            </Modal>
        </div>
    );
}

export default EditProfileForm;