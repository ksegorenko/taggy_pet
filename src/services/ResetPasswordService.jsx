import axios from "axios";
import {RESET_PASSWORD_ENDPOINT} from './Endpoints'

class ResetPasswordService {

    async sendPasswordResetToken(email) {
        return await axios.post(`${RESET_PASSWORD_ENDPOINT}?email=${email}`);
    }

    async updatePassword(updatePasswordDto) {
        return await axios.put(`${RESET_PASSWORD_ENDPOINT}`, updatePasswordDto);
    }
}

export default new ResetPasswordService();