import {useState} from "react";
import styles from "./PetSearchFrom.module.css"
import {useNavigate} from "react-router-dom";
import {usePetInfo} from "../../../hooks/PetHooks";

const PetSearchForm = () => {
    const [searchParameter, setSearchParameter] = useState('');
    const navigate = useNavigate()

    const handleChanges = e => {
        let value = e.target.value;
        console.log(value)
        setSearchParameter(value)
    }

    const findPet = (event) => {
        event.preventDefault();
        navigate(`/pet/info/${searchParameter}`)
    }

    return (
        <div className={styles.container}>
            <form action="">
                <div className={styles.input_container}>
                    <input className={styles.input}
                           type="text"
                           value={searchParameter}
                           placeholder="Введите номер чипа или клеймо"
                           pattern="^\d{15}"
                           maxLength="15"
                           required
                           onChange={handleChanges}
                    />
                </div>

                <button className={styles.button}
                       type="submit"
                       onClick={e => findPet(e)}>
                    Найти
                </button>
            </form>
        </div>
    );
}

export default PetSearchForm;