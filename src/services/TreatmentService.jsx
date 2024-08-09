import axios from "axios";
import * as Endpoint from "services/Endpoints.js";

class TreatmentService {

    async getMedicationsByPropertyId(id) {
        const accessToken = localStorage.getItem('access_token')
        return await axios.get(`${Endpoint.TREATMENT_ENDPOINT}/medication?propertyId=${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }

    async getTreatmentEditInfo(id) {
        const accessToken = localStorage.getItem('access_token')
        return await axios.get(`${Endpoint.TREATMENT_ENDPOINT}/edit?treatmentId=${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }
}

export default new TreatmentService()