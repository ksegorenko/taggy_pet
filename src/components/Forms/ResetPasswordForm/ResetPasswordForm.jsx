import { useState } from "react";
import styles from "./ResetPasswordForm.module.css";
import {useNavigate, useParams} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import resetPasswordService from "services/ResetPasswordService.jsx";

const ResetPasswordForm = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {resetToken} = useParams()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            toast.error('Минимальная длина пароля 6 символов');
            return;
        }
        if (password !== confirmPassword) {
            let confirmPasswordField = document.getElementById("confirmPassword");
            confirmPasswordField.style.borderColor = "#f81d1d";
            confirmPasswordField.style.backgroundColor = "rgb(253 90 90 / 11%)";
            confirmPasswordField.value = "";
            confirmPasswordField.setAttribute("placeholder", "Пароль не совпадает");
        } else {
            console.log('Пароль изменен. Осуществляем вход');
            const updatePasswordDto = {
                token: resetToken,
                new_password: password
            }
            resetPasswordService.updatePassword(updatePasswordDto)
                .then(response => {
                    navigate('/login', { state: { message: 'Пароль успешно изменен' } })
                })
                .catch(error => {
                    toast.error(error?.response?.data?.message || 'Не удалось изменить пароль')
                })
        }
    };


    return (
        <div className={styles.form_container}>
            <form action="" className={styles.form}>
                <p className={styles.message}>
                    Введите новый пароль
                </p>
                <input className={styles.input + ' ' + styles.elem_in_window}
                       type="password"
                       placeholder="Пароль"
                       minLength={6}
                       required
                       name="password"
                       onChange={e => setPassword(e.target.value)}
                />
                <br></br>
                <input className={styles.input + ' ' + styles.elem_in_window}
                       type="password"
                       placeholder="Повторите пароль"
                       required
                       id="confirmPassword"
                       onChange={e => setConfirmPassword(e.target.value)}
                />
                <br></br>
                <button className={styles.button + ' ' + styles.elem_in_window}
                        type="submit"
                        onClick={handleSubmit}>
                    Сохранить
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default ResetPasswordForm;
