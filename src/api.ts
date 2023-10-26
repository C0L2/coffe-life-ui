import axios from "axios";

const URL = import.meta.env.VITE_API_URL

export const regNewUser = (firstName: string, lastName: string, nickname: string, phone: string) => {
    console.log(URL)
    return axios.post(URL + 'users/create-user', {
        firstName, lastName, nickname, phone
    })
}

