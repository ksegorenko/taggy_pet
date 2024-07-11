import {useEffect, useState} from "react";
import phoneValidate from "../../../utils/phoneValidate";
import formstyles from "../LoginForm/LoginForm.module.css";
import styles from "../RegistrationForm/RegistrationForm.module.css";
import editstyles from "./EditProfileForm.module.css"
import userService from "../../../services/UserService";
import {useNavigate} from "react-router-dom";
import authenticationService from "../../../services/AuthenticationService";
import petService from "../../../services/PetService";
import {toast, ToastContainer} from "react-toastify";


const EditProfileForm = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [permitToShowEmail, setPermitToShowEmail] = useState()
    const [permitToShowPhone, setPermitToShowPhone] = useState()
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [tg, setTG] = useState()
    const [vk, setVK] = useState()
    const [ok, setOK] = useState()

    const setUserData = response => {
        setUser(response.data)
        setName(response.data.first_name)
        setEmail(response.data.email)
        setPhone(response.data.phone_number)
        setPermitToShowEmail(response.data.has_permit_to_show_email)
        setPermitToShowPhone(response.data.has_permit_to_show_phone_number)
        setTG(response.data.social_networks.find(network => network.property_value === 'TG')?.short_name)
        setVK(response.data.social_networks.find(network => network.property_value === 'VK')?.short_name)
        setOK(response.data.social_networks.find(network => network.property_value === 'OK')?.short_name)
    }

    useEffect(() => {
        userService.getUserEditInfo()
            .then(response => {
                setUserData(response)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    authenticationService.refreshToken()
                        .then(response => {
                            authenticationService.saveToken(response.data.access_token, response.data.refresh_token)
                            userService.getUserEditInfo()
                                .then(response => {
                                    setUserData(response)
                                })
                                .catch(error => {
                                    authenticationService.deleteTokens()
                                    navigate('/login')
                                })
                        })
                        .catch(error => {
                            authenticationService.deleteTokens()
                            navigate('/login')
                        })
                }
            })
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
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

            const editUserDto = {
                first_name: name,
                email: email,
                phone_number: phone,
                has_permit_to_show_phone_number: permitToShowPhone,
                has_permit_to_show_email: permitToShowEmail,
                new_password: (newPassword.trim() === "" ? null : newPassword.trim()),
                social_networks: socialNetworks
            }
            userService.editUser(editUserDto)
                .then(response => navigate('/user'))
                .catch(error => {
                    if (error.response.status === 401) {
                        authenticationService.refreshToken()
                            .then(response => {
                                authenticationService.saveToken(response.data.access_token, response.data.refresh_token)
                                userService.editUser(editUserDto)
                                    .then(response => navigate('/user'))
                                    .catch(error => {
                                        if (error.response.status === 401) {
                                            authenticationService.deleteTokens()
                                            navigate('/login')
                                        } else {
                                            toast.error(error?.response?.data?.message)
                                        }
                                    })
                            })
                            .catch(error => {
                                if (error?.response?.status === 401) {
                                    authenticationService.deleteTokens()
                                    navigate('/login')
                                } else {
                                    toast.error(error?.response?.data?.message)
                                }
                            })
                    } else {
                        toast.error(error?.response?.data?.message)
                    }
                })
        }
    }

    return (
        <div className={formstyles.form_container}>
            <form action="" className={formstyles.form} onSubmit={e => handleSubmit(e)}>
                <label htmlFor="firstName">Имя</label>
                <input className={editstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Имя"
                       value={name}
                       required
                       name="name"
                       onChange={e => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input className={editstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Email"
                       readOnly
                       value={email}
                       name="email"
                       onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="phone">Телефон</label>
                <input className={editstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Телефон"
                       required
                       value={phone}
                       name="phone"
                       onChange={e => setPhone(e.target.value)}
                />
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
                <label htmlFor="new_password">Новый пароль</label>
                <input className={editstyles.input + ' ' + formstyles.elem_in_window}
                       type="password"
                       placeholder="Пароль"
                       minLength={6}
                       name="password"
                       onChange={e => setNewPassword(e.target.value)}
                />
                <label htmlFor="confirmPassword">Введите новый пароль еще раз</label>
                <input className={editstyles.input + ' ' + formstyles.elem_in_window}
                       type="password"
                       id="confirmPassword"
                       placeholder="Повторите пароль"
                       onChange={e => {setConfirmPassword(e.currentTarget.value)}}
                />
                <div className={editstyles.social_networks_container}>
                    <div className={editstyles.social_network}>
                        <img src={`/images/icons/TG.svg`} alt="Logo" className={styles.social_network_logo}/>
                        <input className={editstyles.input}
                               type="text"
                               placeholder="Логин"
                               name="TG"
                               value={tg}
                               onChange={e => setTG(e.target.value)}
                        />
                    </div>
                    <div className={editstyles.social_network}>
                        <img src={`/images/icons/VK.svg`} alt="Logo" className={styles.social_network_logo}/>
                        <input className={editstyles.input}
                               type="text"
                               placeholder="Логин"
                               name="VK"
                               value={vk}
                               onChange={e => setVK(e.target.value)}
                        />
                    </div>
                    <div className={editstyles.social_network}>
                        <img src={`/images/icons/OK.svg`} alt="Logo" className={styles.social_network_logo}/>
                        <input className={editstyles.input}
                               type="text"
                               placeholder="Логин"
                               name="OK"
                               value={ok}
                               onChange={e => setOK(e.target.value)}
                        />
                    </div>
                </div>

                <button className={formstyles.button + ' ' + formstyles.elem_in_window + ' ' + editstyles.button}
                        type="submit">
                    Подтвердить изменения
                </button>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default EditProfileForm;