import axios from "axios";

class UserService {
    #BASE_URL = 'http://localhost:8080/api/v1/user'

    async getUserInfo() {
        const token = localStorage.getItem('token')
        return await axios.get(this.#BASE_URL + '/info', {
            headers: {
                Authorization: `Basic ${token}`
            }
        })
    }

    async addPet(formData) {
        const token = localStorage.getItem('token')
        return await axios.post(this.#BASE_URL + '/pets', formData,
            {
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    async getUserEditInfo() {
        const token = localStorage.getItem('token')
        return await axios.get(this.#BASE_URL + '/edit', {
            headers: {
                Authorization: `Basic ${token}`
            }
        })
    }

    async editUser(editUserDto) {
        const token = localStorage.getItem('token')
        return await axios.put(this.#BASE_URL + '/edit', editUserDto,
            {
                headers: {
                    'Authorization': `Basic ${token}`
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

export default new UserService();