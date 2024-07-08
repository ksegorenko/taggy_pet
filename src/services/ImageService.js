import axios from "axios";

class ImageService {
    #BASE_URL = 'http://localhost:8080/api/v1/pet/images/'

    async getImage(imageUUIDName) {
        return await axios.get(this.#BASE_URL + imageUUIDName)
    }
}

export default new ImageService();