import axios from "axios";

class AuthenticationService {
    #BASE_URL = 'http://localhost:8080/api/v1/security'

    async login(email, password) {
        const token = btoa(`${email}:${password}`);
        console.log(email, password)
        return await axios.get(`${this.#BASE_URL}/auth`, {
            headers: {
                Authorization: `Basic ${token}`
            }
        })
    }

    async registrate(registrationDto) {
        return await axios.post(`${this.#BASE_URL}/registration`, registrationDto)
    }

    saveToken(email, password) {
        localStorage.setItem('token', btoa(`${email}:${password}`))
    }

    isUserAuthorized() {
        return localStorage.getItem('token') != null
    }

    logout() {
        localStorage.removeItem('token')
    }
}

export default new AuthenticationService();