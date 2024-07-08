import formstyles from "../LoginForm/LoginForm.module.css";
import styles from "./PetCreationForm.module.css"
import {useRef, useState} from "react";
import userService from "../../../services/UserService";
import imageService from "../../../services/ImageService";

const PetCreationForm = () => {
    const [chipId, setChipId] = useState("")
    const [stampId, setStampId] = useState("")
    const [type, setType] = useState("")
    const [breed, setBreed] = useState("")
    const [sex, setSex] = useState('MALE')
    const [name, setName] = useState("")

    const [imageFile, setSelectedFile] = useState(null)
    const fileInputRef = useRef(null);

    const [allergy, setAllergy] = useState("")
    const [medicine, setMedicine] = useState("")
    const [nutrition, setNutrition] = useState("")
    const [other, setOther] = useState("")

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

    const handleSubmit = (e) => {
        e.preventDefault()
        const features = [
            {
                property_id: 0,
                description: allergy
            },
            {
                property_id: 1,
                description: nutrition
            },
            {
                property_id: 2,
                description: medicine
            },
            {
                property_id: 3,
                description: other
            },
        ]
        const pet = {
            chip_id: chipId,
            stamp_id: stampId,
            type: type,
            breed: breed,
            sex: sex,
            name: name,
            features: features
        }
        const formData = new FormData()
        formData.append('pet', new Blob([JSON.stringify(pet)], { type: 'application/json' }));
        formData.append('image_file', imageFile)

        userService.addPet(formData)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <div className={formstyles.form_container}>
            <form action="" className={formstyles.form}>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Чип"
                       pattern="^\d{15}"
                       maxLength="15"
                       required
                       name="chipId"
                       onChange={e => setChipId(e.target.value)}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Клеймо"
                       required
                       name="stampId"
                       onChange={e => setStampId(e.target.value)}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Вид животного"
                       required
                       name="type"
                       onChange={e => setType(e.target.value)}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Порода"
                       required
                       name="breed"
                       onChange={e => setBreed(e.target.value)}
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
                       onChange={e => setName(e.target.value)}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Аллергия"
                       required
                       name="allergy"
                       onChange={e => setAllergy(e.target.value)}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Питание"
                       required
                       name="nutrition"
                       onChange={e => setNutrition(e.target.value)}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Лекарства"
                       required
                       name="medicine"
                       onChange={e => setMedicine(e.target.value)}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Другое"
                       required
                       name="other"
                       onChange={e => setOther(e.target.value)}
                /><br/><br/>

                <div className={styles.file_container}>
                    <input type="file" id="real-file" accept="image/png, image/jpeg" style={{display: 'none'}} ref={fileInputRef} onChange={handleFileUpload}/>
                    <button type="button" id="custom-button" onClick={handleClick}>+</button>
                    <span id="custom-text">{imageFile != null ? imageFile.name : 'Фото не выбрано'}</span>
                </div>
                <button className={formstyles.button + ' ' + formstyles.elem_in_window}
                        type="submit"
                        onClick={e => handleSubmit(e)}>
                    Добавить
                </button>
            </form>
        </div>
    );
}

export default PetCreationForm;