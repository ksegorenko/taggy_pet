import axios from "axios";

class AuthenticationService {
    #BASE_URL = 'http://localhost:8080/api/v1/user/info'
    #token = null

    async login(email, password) {
        this.#token = btoa(`${email}:${password}`)
        console.log(email, password)
        return await axios.get(this.#BASE_URL, {
            headers: {
                Authorization: `Basic ${this.#token}`
            }
        })
    }
}

export default new AuthenticationService();