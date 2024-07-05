import formstyles from "../LoginForm/LoginForm.module.css";
import styles from "./PetCreationForm.module.css"
import {useRef, useState} from "react";

const PetCreationForm = () => {
    const [sex, setSex] = useState('MALE')

    const [selectedFile, setSelectedFile] = useState(null)
    const fileInputRef = useRef(null);

    const update = () => {
    }

    const handleSex = (event) => {
        setSex(event.target.value)
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log(file.name)
        setSelectedFile(file);
    }

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = () => {
        console.log(sex)
    }

    return (
        <div className={formstyles.form_container}>
            <form action="" className={formstyles.form}>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Чип"
                       required
                       name="chipId"
                       onChange={update}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Клеймо"
                       required
                       name="stampId"
                       onChange={update}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Вид животного"
                       required
                       name="type"
                       onChange={update}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Порода"
                       required
                       name="breed"
                       onChange={update}
                /><br/><br/>
                <div className={styles.radios_container}>
                    <label>
                        <input type="radio" id="female" name="sex" value="FEMALE" checked={sex === "FEMALE"} onChange={handleSex} className={styles.real_radio}/>
                            <span className={styles.custom_radio}></span>
                            Самка
                    </label>
                    <label>
                        <input type="radio" id="male" name="sex" value="MALE" checked={sex === "MALE"} onChange={handleSex} className={styles.real_radio}/>
                            <span className={styles.custom_radio}></span>
                            Самец
                    </label>
                </div>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Кличка"
                       required
                       name="name"
                       onChange={update}
                /><br/><br/>
                <div className={styles.file_container}>
                    <input type="file" id="real-file" accept="image/png, image/jpeg" style={{display: 'none'}} ref={fileInputRef} onChange={handleFileUpload}/>
                    <button type="button" id="custom-button" onClick={handleClick}>+</button>
                    <span id="custom-text">{selectedFile != null ? selectedFile.name : 'Фото не выбрано'}</span>
                </div>
                <button className={formstyles.button + ' ' + formstyles.elem_in_window}
                        type="submit"
                        onClick={handleSubmit}>
                    Добавить
                </button>
            </form>
        </div>
    );
}

export default PetCreationForm;