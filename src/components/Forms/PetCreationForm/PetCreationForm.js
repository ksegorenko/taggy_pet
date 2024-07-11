import formstyles from "../LoginForm/LoginForm.module.css";
import regstyles from "../RegistrationForm/RegistrationForm.module.css"
import styles from "./PetCreationForm.module.css"
import {useRef, useState} from "react";
import userService from "../../../services/UserService";
import imageService from "../../../services/ImageService";
import {useNavigate} from "react-router-dom";
import authenticationService from "../../../services/AuthenticationService";
import petService from "../../../services/PetService";
import {toast, ToastContainer} from "react-toastify";

const PetCreationForm = () => {
    const navigate = useNavigate()
    const [chipId, setChipId] = useState('')
    const [stampId, setStampId] = useState('')
    const [type, setType] = useState('')
    const [breed, setBreed] = useState('')
    const [sex, setSex] = useState('MALE')
    const [name, setName] = useState('')

    const [imageFile, setSelectedFile] = useState(null)
    const fileInputRef = useRef(null);

    const [allergy, setAllergy] = useState('')
    const [medicine, setMedicine] = useState('')
    const [nutrition, setNutrition] = useState('')
    const [other, setOther] = useState('')

    const [toggle, setToggle] = useState(false);


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

        if (chipId.trim() === '' && stampId.trim() === '') {
            toast.error('Необходимо указать чип или клеймо питомца');
        }
        else {
            const features = []
            if (allergy != null && allergy.trim() !== '') features.push({property_id: 0, description: allergy})
            if (nutrition != null && nutrition.trim() !== '') features.push({property_id: 1, description: nutrition})
            if (medicine != null && medicine.trim() !== '') features.push({property_id: 2, description: medicine})
            if (other != null && other.trim() !== '') features.push({property_id: 3, description: other})
            const pet = {
                chip_id: chipId.trim() !== '' ? chipId : null,
                stamp_id: stampId.trim() !== '' ? stampId : null,
                type: type,
                breed: breed,
                sex: sex,
                name: name,
                features: features
            }
            const formData = new FormData()
            formData.append('pet', new Blob([JSON.stringify(pet)], { type: 'application/json' }));
            formData.append('image_file', imageFile)

            petService.addPet(formData)
                .then(response => navigate('/user'))
                .catch(error => {
                    if (error.response.status === 401) {
                        authenticationService.refreshToken()
                            .then(response => {
                                authenticationService.saveToken(response.data.access_token, response.data.refresh_token)
                                petService.addPet(formData)
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
                                if (error.response.status === 401) {
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
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Чип"
                       pattern="^\d{15}"
                       maxLength="15"
                       name="chipId"
                       onChange={e => setChipId(e.target.value)}
                /><br/><br/>
                <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                       type="text"
                       placeholder="Клеймо"
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
                <div className={styles.file_container}>
                    <input type="file" id="real-file" accept="image/png, image/jpeg" style={{display: 'none'}} ref={fileInputRef} onChange={handleFileUpload}/>
                    <button type="button" id="custom-button" onClick={handleClick}>+</button>
                    <span id="custom-text">{imageFile != null ? imageFile.name : 'Фото не выбрано'}</span>
                </div>
                <div className={regstyles.checked}>
                    <label>
                        <input type="checkbox" name="features_checkbox" id="check" onChange={e => setToggle(e.currentTarget.checked)} className={regstyles.real_checkbox}/>
                        <span className={regstyles.custom_checkbox}></span>
                        У питомца есть особенности
                    </label> <br/><br/>
                    {toggle && (
                        <>
                            <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                                   type="text"
                                   placeholder="Аллергия"
                                   name="allergy"
                                   onChange={e => setAllergy(e.target.value)}
                            /><br/><br/>
                            <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                                   type="text"
                                   placeholder="Питание"
                                   name="nutrition"
                                   onChange={e => setNutrition(e.target.value)}
                            /><br/><br/>
                            <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                                   type="text"
                                   placeholder="Лекарства"
                                   name="medicine"
                                   onChange={e => setMedicine(e.target.value)}
                            /><br/><br/>
                            <input className={formstyles.input + ' ' + formstyles.elem_in_window}
                                   type="text"
                                   placeholder="Другое"
                                   name="other"
                                   onChange={e => setOther(e.target.value)}
                            /><br/><br/>
                        </>
                    )}
                </div>
                <button className={formstyles.button + ' ' + formstyles.elem_in_window}
                        type="submit">
                    Добавить
                </button>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default PetCreationForm;