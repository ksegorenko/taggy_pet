import axios from "axios";
import * as Endpoint from './Endpoints'

class PetService {

    async getPetInfoBySearchParameter(searchParameter) {
        return await axios.get(`${Endpoint.PET_ENDPOINT}/find/${searchParameter}`);
    }

    async deletePet(petId) {
        const accessToken = localStorage.getItem('access_token')
        return await axios.delete(`${Endpoint.PET_ENDPOINT}/${petId}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    }

    async getPetEditInfo(petId) {
        const accessToken = localStorage.getItem('access_token')
        return await axios.get(`${Endpoint.PET_ENDPOINT}/${petId}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    }

    async editPet(petId, petEditDto) {
        const accessToken = localStorage.getItem('access_token')
        return await axios.put(`${Endpoint.PET_ENDPOINT}/${petId}`, petEditDto,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
    }
}

export default new PetService();