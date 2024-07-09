import {useState} from "react";
import styles from "./PetSearchFrom.module.css";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PetSearchForm = () => {
    const [searchParameter, setSearchParameter] = useState('');
    const navigate = useNavigate();

    const handleChanges = e => {
        let value = e.target.value.toUpperCase();
        setSearchParameter(value);
    }

    const handleKeyPress = e => {
        const charCode = e.charCode || e.keyCode;
        const charStr = String.fromCharCode(charCode);
        const latinAndNumbersRegex = /^[a-zA-Z0-9]$/;
        const russianRegex = /[а-яА-Я]/;

        if (russianRegex.test(charStr)) {
            e.preventDefault();
            toast.error('Для ввода клейма необходимо использовать латинские символы и цифры.');
        } else if (!latinAndNumbersRegex.test(charStr)) {
            e.preventDefault();
        }
    }

    const findPet = (event) => {
        event.preventDefault();
        navigate(`/pet/info`);
    }

    return (
        <div className={styles.container}>
            <form action="">
                <div className={styles.input_container}>
                    <input className={styles.input}
                           type="text"
                           value={searchParameter}
                           placeholder="Введите номер чипа или клеймо"
                           pattern="^[A-Z0-9]{15}$"
                           maxLength="15"
                           required
                           onChange={handleChanges}
                           onKeyPress={handleKeyPress}
                    />
                </div>

                <button className={styles.button}
                       type="submit"
                       onClick={e => findPet(e)}>
                    Найти
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default PetSearchForm;
