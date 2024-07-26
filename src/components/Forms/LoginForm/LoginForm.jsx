import {useState} from "react";
import styles from "./LoginForm.module.css"
import authenticationService from "../../../services/AuthenticationService";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        authenticationService.login(email, password)
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token)
                localStorage.setItem('refresh_token', response.data.refresh_token)
                navigate('/user')
            })
            .catch(error => {
                toast.error('Неверный логин или пароль')
            })

    }

    return (
        <div className={styles.form_container}>
            <form action="" className={styles.form}>
                <input className={styles.input + ' ' + styles.elem_in_window}
                       type="text"
                       placeholder="Email"
                       value={email}
                       required
                       onChange={e => setEmail(e.target.value)}
                />
                <br/><br/>
                <input className={styles.input + ' ' + styles.elem_in_window}
                       type="password"
                       placeholder="Пароль"
                       value={password}
                       required
                       onChange={e => setPassword(e.target.value)}
                />
                <br/><br/>
                <button className={styles.button + ' ' + styles.elem_in_window}
                        type="submit"
                        onClick={e => handleLogin(e)}>
                    Войти
                </button>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default LoginForm;