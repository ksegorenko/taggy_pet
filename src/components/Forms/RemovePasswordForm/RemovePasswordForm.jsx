import {useState} from "react";
import styles from "./RemovePasswordForm.module.css"
import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import resetPasswordService from "services/ResetPasswordService.jsx";
import {toast, ToastContainer} from "react-toastify";


const RemovePasswordForm = () => {
    const [email, setEmail] = useState('');

    const handleRemovePassword = (e) => {
        e.preventDefault();
        resetPasswordService.sendPasswordResetToken(email)
            .then(response => {
                toast.success('Отправили вам на почту письмо для восстановления пароля')
            })
            .catch(error => {
                toast.error(error?.response?.data?.message || 'Не удалось отправить письмо')
            })
    }

    return (
        <div className={styles.form_container}>
            <form action="" className={styles.form} onSubmit={e => handleRemovePassword(e)}>
                <p className={styles.message}>
                    Введите почту для получения ссылки на восстановление пароля
                </p>
                <input className={styles.input + ' ' + styles.elem_in_window}
                       type="text"
                       placeholder="Email"
                       value={email}
                       required
                       onChange={e => setEmail(e.target.value)}
                />
                <br></br>
                <button className={styles.button + ' ' + styles.elem_in_window}>
                    Получить ссылку
                </button>
            </form>
            <ToastContainer/>
        </div>
    )


}

export default RemovePasswordForm;