import axios from "axios";
import { User } from "./interfaces/user.interface"
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

export const voteSurvey = (is_pro: boolean, question: number) => {
    const answer_text = is_pro ? "Yes" : "No";
    return axios.post(URL + "survey/answers", {
        answer_text, is_pro, question
    })
}

export const getMyNymber = () => {
    const nickname = localStorage.getItem('nickname')

    return axios.post<User>(URL + "users/find-by-nickanme", {
        nickname
    })
}

export const getAllQuestions = () => {
    return axios.get(URL + "questions/all")
}

export const deleteQuestion = (id: number) => {
    return axios.delete(URL + `questions/${id}`)
}

