import axios from "axios";

const URL = import.meta.env.VITE_API_URL

export const regNewUser = (firstName: string, lastName: string, nickname: string, phone: string) => {
    return axios.post(URL + 'users/create-user', {
        firstName, lastName, nickname, phone
    })
}

export const askQuestions = (question: string) => {
    return axios.post(URL + 'questions/create-question', {
        question,
        nickname: localStorage.getItem('nickname')
    })
}

