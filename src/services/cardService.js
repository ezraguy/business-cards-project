import http from "../services/httpService";
import { apiUrl } from "../config.json";

export function createCard(card) {
    return http.post(`${apiUrl}/cards`, card)
}


export default { createCard };