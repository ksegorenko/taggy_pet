import {useState} from "react";
import styles from "./RemovePasswordForm.module.css"
import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const RemovePasswordForm = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    const handleRemovePassword = (e) => {
        e.preventDefault();
        console.log('Пользователь пытается восстановить пароль');
    }

    return (
        <div className={styles.form_container}>
            <form action="" className={styles.form}>
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
                <button className={styles.button + ' ' + styles.elem_in_window}
                        type="submit"
                        onClick={e => handleRemovePassword(e)}>
                    Получить ссылку
                </button>
            </form>
        </div>
    )


}

export default RemovePasswordForm;