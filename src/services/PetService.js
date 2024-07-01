import axios from "axios";

class PetService {
    #BASE_URL = 'http://localhost:8080/api/v1/pet'

    async getPetInfoBySearchParameter(searchParameter) {
        return await axios.get(`${this.#BASE_URL}/find/${searchParameter}`);
    }
}

export default new PetService();