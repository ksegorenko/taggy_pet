import formstyles from "../LoginForm/LoginForm.module.css";
import editstyles from "../EditProfileForm/EditProfileForm.module.css";
import petformstyles from "../PetCreationForm/PetCreationForm.module.css"
import styles from "./EditPetForm.module.css";
import {useEffect, useRef, useState} from "react";
import Modal from "../../Modal/Modal";
import {useNavigate, useParams} from "react-router-dom";
import petService from "../../../services/PetService";
import userService from "../../../services/UserService";
import authenticationService from "../../../services/AuthenticationService";
import {toast, ToastContainer} from "react-toastify";
import * as Endpoint from "../../../services/Endpoints";

const EditPetForm = () => {
    const {petId} = useParams()
    const navigate = useNavigate()
    const [pet, setPet] = useState()
    const [chipId, setChipId] = useState('')
    const [stampId, setStampId] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [breed, setBreed] = useState('')
    const [sex, setSex] = useState('')
    const [petImage, setPetImage] = useState('')
    const [petImageName, setPetImageName] = useState()
    const [allergy, setAllergy] = useState('')
    const [nutrition, setNutrition] = useState('')
    const [medicine, setMedicine] = useState('')
    const [other, setOther] = useState('')
    const [imageFile, setSelectedFile] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const fileInputRef = useRef(null);

    const [modalConfirmIsOpen, setModalConfirmOpen] = useState(false);
    const [imageFileText, setImageFileText] = useState()


    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setImageFileText('Изменить фото')

        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result); // Сохраняем URL изображения
        };
        if (file) {
            reader.readAsDataURL(file); // Читаем файл как URL
        }
    }

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const setPetData = response => {
        setPet(response.data)

        setChipId(response.data?.chip_id ? response.data?.chip_id : '' )
        setStampId(response.data?.stamp_id ? response.data?.stamp_id : '')
        setName(response.data?.name)
        setPetImageName(response.data?.pet_image?.image_uuid_name)
        if (response.data?.pet_image?.image_uuid_name === 'default-pet-image.png') {
            setImageFileText('Добавить фото')
        }
        else {
            setImageFileText('Изменить фото')
        }
        setType(response.data?.type)
        setBreed(response.data?.breed)
        setSex(response.data?.sex)
        setAllergy(response.data?.features[0]?.description)
        setNutrition(response.data?.features[1]?.description)
        setMedicine(response.data?.features[2]?.description)
        setOther(response.data?.features[3]?.description)
    }

    useEffect(() => {
        petService.getPetEditInfo(petId)
            .then(response => {
                setPetData(response)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    authenticationService.refreshToken()
                        .then(response => {
                            authenticationService.saveToken(response.data.access_token, response.data.refresh_token)
                            petService.getPetEditInfo(petId)
                                .then(response => {
                                    setPetData(response)
                                })
                                .catch(error => {
                                    authenticationService.deleteTokens()
                                    navigate('/login')
                                })
                        })
                        .catch(error => {
                            authenticationService.deleteTokens()
                            navigate('/login')
                        })
                }
            })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (chipId.trim() === '' && stampId.trim() === '') {
            toast.error('Необходимо указать чип или клеймо питомца');
        } else if (chipId.trim() !== '' && chipId.trim().length !== 15) {
            toast.error('Чип должен состоять из 15 символов');
        } else {
            const features = []
            if (allergy != null && allergy.trim() !== '') features.push({property_id: 0, description: allergy})
            if (nutrition != null && nutrition.trim() !== '') features.push({property_id: 1, description: nutrition})
            if (medicine != null && medicine.trim() !== '') features.push({property_id: 2, description: medicine})
            if (other != null && other.trim() !== '') features.push({property_id: 3, description: other})

            const pet = {
                chip_id: chipId.trim() !== '' ? chipId.trim() : null,
                stamp_id: stampId.trim() !== '' ? stampId.trim() : null,
                type: type,
                breed: breed,
                sex: sex,
                name: name,
                features: features,
                pet_image: null
            }
            const formData = new FormData()
            formData.append('pet', new Blob([JSON.stringify(pet)], { type: 'application/json' }));
            formData.append('image_file', imageFile)

            petService.editPet(petId, formData)
                .then(response => navigate('/user'))
                .catch(error => {
                    if (error.response.status === 401) {
                        authenticationService.refreshToken()
                            .then(response => {
                                authenticationService.saveToken(response.data.access_token, response.data.refresh_token)
                                petService.editPet(petId, formData)
                                    .then(response => navigate('/user'))
                                    .catch(error => {
                                        if (error.response.status === 401) {
                                            authenticationService.deleteTokens()
                                            navigate('/login')
                                        }
                                        else {
                                            toast.error(error?.response?.data?.message)
                                        }
                                    })
                            })
                            .catch(error => {
                                if (error.response.status === 401) {
                                    authenticationService.deleteTokens()
                                    navigate('/login')
                                }
                                else {
                                    toast.error(error?.response?.data?.message)
                                }
                            })
                    } else {
                        toast.error(error?.response?.data?.message)
                    }
                })
        }
    };

    const deletePet= () => {
        petService.deletePet(petId)
            .then(response => navigate('/user'))
            .catch(error => {
                if (error.response.status === 401) {
                    authenticationService.refreshToken()
                        .then(response => {
                            authenticationService.saveToken(response.data.access_token, response.data.refresh_token)
                            petService.deletePet(petId)
                                .then(response => navigate('/user'))
                                .catch(error => {
                                    authenticationService.deleteTokens()
                                    navigate('/login')
                                })
                        })
                        .catch(error => {
                            authenticationService.deleteTokens()
                            navigate('/login')
                        })
                }
            })
    }

    const handleDelete = () => {
        setModalConfirmOpen(true);
    };

    return (
        <div className={formstyles.form_container}>
            <form action="" className={`${formstyles.form} ${styles.form}`} onSubmit={e => handleSubmit(e)}>
                <label htmlFor="chipId">Чип</label>
                <input className={`${editstyles.input} ${formstyles.elem_in_window}`}
                    id="chipId"
                    type="text"
                    placeholder="Чип"
                    value={chipId}
                    name="chipId"
                    onChange={e => setChipId(e.target.value)}
                />
                <label htmlFor="stampId">Клеймо</label>
                <input className={`${editstyles.input} ${formstyles.elem_in_window}`}
                    id="stampId"
                    type="text"
                    placeholder="Клеймо"
                    value={stampId}
                    name="stampId"
                    onChange={e => setStampId(e.target.value)}
                />
                <label htmlFor="type">Вид</label>
                <input className={`${editstyles.input} ${formstyles.elem_in_window}`}
                    type="text"
                    placeholder="Вид"
                    required
                    value={type}
                    id="type"
                    name="type"
                    onChange={e => setType(e.target.value)}
                />
                <label htmlFor="breed">Порода</label>
                <input className={`${editstyles.input} ${formstyles.elem_in_window}`}
                    type="text"
                    placeholder="Порода"
                    required
                    value={breed}
                    id="breed"
                    name="breed"
                    onChange={e => setBreed(e.target.value)}
                />
                <div className={styles.radios_container}>
                    <label>
                        <input type="radio" id="female" name="sex" value="FEMALE" checked={sex === "FEMALE"} onChange={e => setSex(e.target.value)} className={styles.real_radio} />
                        <span className={styles.custom_radio}></span>
                        Самка
                    </label>
                    <label>
                        <input type="radio" id="male" name="sex" value="MALE" checked={sex === "MALE"} onChange={e => setSex(e.target.value)} className={styles.real_radio} />
                        <span className={styles.custom_radio}></span>
                        Самец
                    </label>
                </div>
                <label htmlFor="name">Кличка</label>
                <input className={`${editstyles.input} ${formstyles.elem_in_window}`}
                    type="text"
                    placeholder="Кличка"
                    required
                    value={name}
                    id="name"
                    name="name"
                    onChange={e => setName(e.target.value)}
                />

                {imageUrl &&
                    <div className={`${styles.wrapper} ${styles.pet_card} ${formstyles.elem_in_window}`}
                         style={{background: `url(${imageUrl})`}}>
                    </div>
                }
                {imageUrl == null &&
                    <div className={`${styles.wrapper} ${styles.pet_card} ${formstyles.elem_in_window}`}
                         style={{background: 'url(' + Endpoint.IMAGE_ENDPOINT + '/' + petImageName + ')'}}>
                    </div>
                }

                <div className={styles.file_container}>
                    <input type="file" id="real-file" accept="image/png, image/jpeg" style={{display: 'none'}} ref={fileInputRef} onChange={handleFileUpload}/>
                    <button type="button" id="custom-button" onClick={handleClick}>+</button>
                    <span id="custom-text">{imageFileText}</span>
                </div>
                <div className={styles.features}>
                    <h2>Особенности</h2>
                    <div key={0}>
                        <label htmlFor="Аллергия">Аллергия</label>
                        <input
                            className={`${editstyles.input} ${formstyles.elem_in_window}`}
                            id={0}
                            type="text"
                            value={allergy}
                            onChange={(e) => setAllergy(e.target.value)}
                        />
                    </div>
                    <div key={1}>
                        <label htmlFor="Питание">Питание</label>
                        <input
                            className={`${editstyles.input} ${formstyles.elem_in_window}`}
                            id={1}
                            type="text"
                            value={nutrition}
                            onChange={(e) => setNutrition(e.target.value)}
                        />
                    </div>
                    <div key={2}>
                        <label htmlFor="Лекарства">Лекарства</label>
                        <input
                            className={`${editstyles.input} ${formstyles.elem_in_window}`}
                            id={2}
                            type="text"
                            value={medicine}
                            onChange={(e) => setMedicine(e.target.value)}
                        />
                    </div>
                    <div key={3}>
                        <label htmlFor="Другое">Другое</label>
                        <input
                            className={`${editstyles.input} ${formstyles.elem_in_window}`}
                            id={3}
                            type="text"
                            value={other}
                            onChange={(e) => setOther(e.target.value)}
                        />
                    </div>
                </div>
                <button className={`${formstyles.button} ${formstyles.elem_in_window} ${editstyles.button}`}
                    type="submit">
                    Подтвердить изменения
                </button>
                <button className={`${formstyles.button} ${formstyles.elem_in_window} ${styles.delete_button}`}
                    type="button"
                    onClick={handleDelete}>
                    Удалить карточку
                </button>
            </form>
            <ToastContainer/>
            <Modal isOpen={modalConfirmIsOpen} onClose={() => setModalConfirmOpen(false)} onDelete={deletePet}>
                    <h2>Вы уверены?</h2>
                    <p>Все данные о питомце будут удалены и в случае его пропажи люди не смогут связаться с Вами через наш сервис.</p>
            </Modal>
        </div>
    );
}

export default EditPetForm;
