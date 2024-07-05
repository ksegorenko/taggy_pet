import formstyles from "../LoginForm/LoginForm.module.css";
import editstyles from "../EditProfileForm/EditProfileForm.module.css";
import styles from "./EditPetForm.module.css";
import { useState } from "react";
import Modal from "../../Modal/Modal";

// Объект данных питомца (как и ранее)
const pet = {
    chipId: "123456789012345",
    stampId: "AAA111",
    type: "Собака",
    breed: "Терьер",
    sex: "MALE",
    name: "Руди",
    features: [
        {
            propertyId: 0,
            propertyValue: "Аллергия",
            description: "Описание аллергии"
        },
        {
            propertyId: 1,
            propertyValue: "Питание",
            description: "Какое-то описание питания"
        },
        {
            propertyId: 2,
            propertyValue: "Лекарства",
            description: ""
        },
        {
            propertyId: 3,
            propertyValue: "Другое",
            description: ""
        }
    ]
}

const EditPetForm = () => {
    const [petData, setPetData] = useState(pet);
    const [modalConfirmIsOpen, setModalConfirmOpen] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPetData({ ...petData, [name]: value });
    }

    const handleFeatureChange = (propertyId, description) => {
        const updatedFeatures = petData.features.map(feature => {
            if (feature.propertyId === propertyId) {
                return { ...feature, description }
            }
            return feature
        });
        setPetData({ ...petData, features: updatedFeatures });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Логика обработки отправленных данных
        console.log(petData);
    };

    const handleDelete = () => {
        setModalConfirmOpen(true);
    };

    return (
        <div className={formstyles.form_container}>
            <form action="" className={`${formstyles.form} ${styles.form}`}>
                <label htmlFor="chipId">Чип</label>
                <input className={`${editstyles.input} ${formstyles.elem_in_window}`}
                    id="chipId"
                    type="text"
                    placeholder="Чип"
                    required
                    readOnly
                    value={petData.chipId}
                    name="chipId"
                    onChange={handleChange}
                />
                <label htmlFor="stampId">Клеймо</label>
                <input className={`${editstyles.input} ${formstyles.elem_in_window}`}
                    id="stampId"
                    type="text"
                    placeholder="Клеймо"
                    required
                    value={petData.stampId}
                    name="stampId"
                    onChange={handleChange}
                />
                <label htmlFor="type">Вид</label>
                <input className={`${editstyles.input} ${formstyles.elem_in_window}`}
                    type="text"
                    placeholder="Вид"
                    required
                    value={petData.type}
                    id="type"
                    name="type"
                    onChange={handleChange}
                />
                <label htmlFor="breed">Порода</label>
                <input className={`${editstyles.input} ${formstyles.elem_in_window}`}
                    type="text"
                    placeholder="Порода"
                    required
                    value={petData.breed}
                    id="breed"
                    name="breed"
                    onChange={handleChange}
                />
                <div className={styles.radios_container}>
                    <label>
                        <input type="radio" id="female" name="sex" value="FEMALE" checked={petData.sex === "FEMALE"} onChange={handleChange} className={styles.real_radio} />
                        <span className={styles.custom_radio}></span>
                        Самка
                    </label>
                    <label>
                        <input type="radio" id="male" name="sex" value="MALE" checked={petData.sex === "MALE"} onChange={handleChange} className={styles.real_radio} />
                        <span className={styles.custom_radio}></span>
                        Самец
                    </label>
                </div>
                <label htmlFor="name">Кличка</label>
                <input className={`${editstyles.input} ${formstyles.elem_in_window}`}
                    type="text"
                    placeholder="Кличка"
                    required
                    value={petData.name}
                    id="name"
                    name="name"
                    onChange={handleChange}
                />
                <div className={styles.features}>
                    <h2>Особенности</h2>
                    {petData.features.map((feature) => {
                        return (
                            <div key={feature.propertyId}>
                                <label htmlFor={feature.propertyValue}>{feature.propertyValue}</label>
                                <input
                                    className={`${editstyles.input} ${formstyles.elem_in_window}`}
                                    id={feature.propertyValue}
                                    type="text"
                                    value={feature.description}
                                    onChange={(e) => handleFeatureChange(feature.propertyId, e.target.value)}
                                />
                            </div>
                        )
                    })}
                </div>
                <button className={`${formstyles.button} ${formstyles.elem_in_window} ${editstyles.button}`}
                    type="submit"
                    onClick={handleSubmit}>
                    Подтвердить изменения
                </button>
                <button className={`${formstyles.button} ${formstyles.elem_in_window} ${styles.delete_button}`}
                    type="button"
                    onClick={handleDelete}>
                    Удалить карточку
                </button>
            </form>

            <Modal isOpen={modalConfirmIsOpen} onClose={() => setModalConfirmOpen(false)}>
                    <h2>Вы уверены?</h2>
                    <p>Все данные о питомце будут удалены и в случае его пропажи люди не смогут связаться с Вами через наш сервис.</p>
            </Modal>
        </div>
    );
}

export default EditPetForm;
