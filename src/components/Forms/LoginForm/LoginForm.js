import {useState} from "react";
import styles from "./LoginForm.module.css"
import useAuth from "../../../hooks/AuthHook";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import authenticationService from "../../../services/AuthenticationService";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        authenticationService.login(email, password)
            .then(response => {
                console.log(response.status)
                console.log(document.cookie)
                authenticationService.saveToken(email, password)
                navigate('/')
            })
            .catch(error => console.log(error.response.status))

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
        </div>
    );
}

export default LoginForm;