import {useState} from "react";
import formstyles from "../LoginForm/LoginForm.module.css";
import styles from "./RegistrationForm.module.css"
import phoneValidate from "../../../utils/phoneValidate";


const RegistrationForm = () => {
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
    const [toggle, setToggle] = useState(false);

    const socialNetworks = ['TG', 'VK', 'OK'];
    const [logins, setLogins] = useState({});

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
        console.log(toggle);
    }

    return (
        <div className={formstyles.form_container}>
            <form action="" className={formstyles.form}>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Имя"
                       required
                       name="name"
                       onChange={update}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Email"
                       required
                       name="email"
                       onChange={update}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Телефон"
                       required
                       name="phone"
                       onChange={update}
                /><br/><br/>
                <h5 className={styles.h5}>Разрешаю показывать контакты</h5>
                <div className={styles.checkboxes}>
                    <label>
                        <input type="checkbox" name="emailPermit" onChange={update} className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            email
                    </label>
                    <label>
                        <input type="checkbox" id="phone" name="phonePermit" onChange={update} className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            телефон
                    </label>
                </div>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="password"
                       placeholder="Пароль"
                       required
                       name="password"
                       onChange={update}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="password"
                       placeholder="Повторите пароль"
                       required
                       id="confirmPassword"
                       onChange={e => {setConfirmPassword(e.currentTarget.value)}}
                /><br/><br/>
                <div className={styles.checked}>
                    <label>
                        <input type="checkbox" name="features_checkbox" id="check" onChange={e => setToggle(e.currentTarget.checked)} className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Указать соцсети
                    </label>
                    {toggle && (
                        socialNetworks.map((network) => {
                            return (
                                <div className={styles.social_networks_container}>
                                    <img src={`/images/icons/${network}.svg`} alt="Logo" className={styles.social_network_logo}/>
                                    <input className={styles.input}
                                        type="text"
                                        placeholder="Логин"
                                        name={network.propertyValue}
                                        value={network.shortName}
                                        onChange={updateNetwork}
                                    />
                                </div>
                            )
                        })
                    )}
                </div>
                <button className={formstyles.button + ' ' + formstyles.elem_in_window}
                        type="submit"
                        onClick={handleSubmit}>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;