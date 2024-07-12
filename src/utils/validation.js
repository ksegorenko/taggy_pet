import {toast} from "react-toastify";

export function isChipValid(value) {
    return /^\d{15}$/.test(value)
}

export function isStampValid(value) {
    return /^[A-Z]+\d+$/.test(value)
}

export function handleStampKeyPress(e) {
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