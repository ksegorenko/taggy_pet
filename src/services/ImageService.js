import axios from "axios";
import * as Endpoint from './Endpoints'

class ImageService {
    async getImage(imageUUIDName) {
        return await axios.get(`${Endpoint.IMAGE_ENDPOINT}/${imageUUIDName}`)
    }
}

export default new ImageService();