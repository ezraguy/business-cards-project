import http from "../services/httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

export async function login(email, password) {

    //gets the user token 
    const { data } = await http.post(`${apiUrl}/auth`, { email, password })
    //saving the token in the local storage
    localStorage.setItem("token", data.token)
}

export function logOut() {
    localStorage.removeItem("token");
}

export function getCurrentUser() {
    // check if the token is valid
    try {
        const jwt = localStorage.getItem("token")
        return jwtDecode(jwt);
    } catch (err) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem("token");
}


export default { login, getCurrentUser, logOut, getJwt };