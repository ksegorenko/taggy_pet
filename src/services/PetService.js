import axios from "axios";

class PetService {
    #BASE_URL = 'http://localhost:8080/api/v1/pet'

    async getPetInfoBySearchParameter(searchParameter) {
        return await axios.get(`${this.#BASE_URL}/find/${searchParameter}`);
    }

    async getPetEditInfo(petId) {
        const token = localStorage.getItem('token')
        return await axios.get(`${this.#BASE_URL}/${petId}`,{
            headers: {
                Authorization: `Basic ${token}`
            }
        });
    }

    async editPet(petId, petEditDto) {
        const token = localStorage.getItem('token')
        return await axios.put(`${this.#BASE_URL}/${petId}`, petEditDto,
            {
                headers: {
                    Authorization: `Basic ${token}`
                }
            })
    }
}

export default new PetService();