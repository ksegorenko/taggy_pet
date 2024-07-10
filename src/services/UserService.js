import axios from "axios";
import * as Endpoint from './Endpoints'

class UserService {

    async getUserInfo() {
        const accessToken = localStorage.getItem('access_token')
        return await axios.get(`${Endpoint.USER_ENDPOINT}/info`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }

    async deleteUser() {
        const accessToken = localStorage.getItem('access_token')
        return await axios.delete(`${Endpoint.USER_ENDPOINT}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }

    async addPet(formData) {
        const accessToken = localStorage.getItem('access_token')
        return await axios.post(`${Endpoint.USER_ENDPOINT}/pets`, formData,
            {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    async getUserEditInfo() {
        const accessToken = localStorage.getItem('access_token')
        return await axios.get(`${Endpoint.USER_ENDPOINT}/edit`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }

    async editUser(editUserDto) {
        const accessToken = localStorage.getItem('access_token')
        return await axios.put(`${Endpoint.USER_ENDPOINT}/edit`, editUserDto,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
    }
}

export default new UserService();