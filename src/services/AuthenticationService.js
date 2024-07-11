import axios from "axios";
import * as Endpoint from './Endpoints'

class AuthenticationService {

    async login(email, password) {
        const loginDto = {
            email: email,
            password: password
        }
        return await axios.post(`${Endpoint.SECURITY_ENDPOINT}/login`, loginDto)
    }

    isAuthorized() {
        return localStorage.getItem('access_token') != null;
    }

    async refreshToken() {
        const refreshTokenDto = {
            refresh_token: localStorage.getItem('refresh_token')
        }
        return await axios.post(`${Endpoint.SECURITY_ENDPOINT}/token/refresh`, refreshTokenDto)
    }

    saveToken(accessToken, refreshToken) {
        localStorage.setItem('access_token', accessToken)
        localStorage.setItem('refresh_token', refreshToken)
    }

    deleteTokens() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
    }

    logout () {
        this.deleteTokens()
    }

    async register(registrationDto) {
        return await axios.post(`${Endpoint.SECURITY_ENDPOINT}/registration`, registrationDto)
    }
}

export default new AuthenticationService();