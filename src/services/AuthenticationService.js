import axios from "axios";

class AuthenticationService {
    #BASE_URL = 'http://localhost:8080/api/v1/security/auth'

    async login(email, password) {
        const token = btoa(`${email}:${password}`);
        console.log(email, password)
        return await axios.get(this.#BASE_URL, {
            headers: {
                Authorization: `Basic ${token}`
            }
        })
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