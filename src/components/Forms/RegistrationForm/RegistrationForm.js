import {useState} from "react";
import formstyles from "../LoginForm/LoginForm.module.css";
import styles from "./RegistrationForm.module.css"
import authenticationService from "../../../services/AuthenticationService";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";


const RegistrationForm = () => {
    const navigate = useNavigate()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [permitToShowEmail, setPermitToShowEmail] = useState()
    const [permitToShowPhone, setPermitToShowPhone] = useState()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [tg, setTG] = useState('')
    const [vk, setVK] = useState('')
    const [ok, setOK] = useState('')

    const [toggle, setToggle] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            let confirmPasswordField = document.getElementById("confirmPassword");
            confirmPasswordField.style.borderColor="#f81d1d";
            confirmPasswordField.style.backgroundColor="rgb(253 90 90 / 11%)";
            confirmPasswordField.value = "";
            confirmPasswordField.setAttribute("placeholder", "Пароль не совпадает")
        } else {
            const socialNetworks = []
            if (tg != null && tg.trim() !== '') socialNetworks.push({property_id: 0, short_name: tg})
            if (vk != null && vk.trim() !== '') socialNetworks.push({property_id: 1, short_name: vk})
            if (ok != null && ok.trim() !== '') socialNetworks.push({property_id: 2, short_name: ok})

            const registrationDto = {
                first_name: name,
                email: email,
                phone_number: phone,
                has_permit_to_show_phone_number: permitToShowPhone,
                has_permit_to_show_email: permitToShowEmail,
                password: password,
                social_networks: socialNetworks
            }
            authenticationService.register(registrationDto)
                .then((response) => {
                    localStorage.setItem('access_token', response.data.access_token)
                    localStorage.setItem('refresh_token', response.data.refresh_token)
                    navigate('/user')
                })
                .catch(error => {
                    toast.error('Пользователь с такой почтой уже существует')
                })
        }
    }

    return (
        <div className={formstyles.form_container}>
            <form action="" className={formstyles.form} onSubmit={e => handleSubmit(e)}>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Имя"
                       required
                       name="name"
                       onChange={e => setName(e.target.value)}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Email"
                       required
                       name="email"
                       onChange={e => setEmail(e.target.value)}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Телефон"
                       required
                       name="phone"
                       onChange={e => setPhone(e.target.value)}
                /><br/><br/>
                <h5 className={styles.h5}>Разрешаю показывать контакты</h5>
                <div className={styles.checkboxes}>
                    <label>
                        <input type="checkbox" name="emailPermit" checked={permitToShowEmail} onChange={e => setPermitToShowEmail(e.target.checked)} className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            email
                    </label>
                    <label>
                        <input type="checkbox" id="phone" name="phonePermit" checked={permitToShowPhone} onChange={e => setPermitToShowPhone(e.target.checked)} className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            телефон
                    </label>
                </div>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="password"
                       placeholder="Пароль"
                       required
                       name="password"
                       onChange={e => setPassword(e.target.value)}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="password"
                       placeholder="Повторите пароль"
                       required
                       id="confirmPassword"
                       onChange={e => {setConfirmPassword(e.target.value)}}
                /><br/><br/>
                <div className={styles.checked}>
                    <label>
                        <input type="checkbox" name="features_checkbox" id="check" onChange={e => setToggle(e.currentTarget.checked)} className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Указать соцсети
                    </label>
                    {toggle && (
                        <>
                            <div className={styles.social_networks_container}>
                                <img src={`/images/icons/TG.svg`} alt="Logo" className={styles.social_network_logo}/>
                                <input className={styles.input}
                                       type="text"
                                       placeholder="Логин"
                                       name="TG"
                                       value={tg}
                                       onChange={e => setTG(e.target.value)}
                                />
                            </div>
                            <div className={styles.social_networks_container}>
                                <img src={`/images/icons/VK.svg`} alt="Logo" className={styles.social_network_logo}/>
                                <input className={styles.input}
                                       type="text"
                                       placeholder="Логин"
                                       name="VK"
                                       value={vk}
                                       onChange={e => setVK(e.target.value)}
                                />
                            </div>
                            <div className={styles.social_networks_container}>
                                <img src={`/images/icons/OK.svg`} alt="Logo" className={styles.social_network_logo}/>
                                <input className={styles.input}
                                       type="text"
                                       placeholder="Логин"
                                       name="OK"
                                       value={ok}
                                       onChange={e => setOK(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                </div>
                <button className={formstyles.button + ' ' + formstyles.elem_in_window}
                        type="submit">
                    Зарегистрироваться
                </button>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default RegistrationForm;