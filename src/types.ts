export interface FormData {
    name: string;
    surname: string;
    nickname: string;
    mobileNumber: string;
}

export interface AdminQuestions {
    key: number;
    id: number;
    user: string;
    question: string;
}

export interface MenuCardProps {
    title: string;
    title_ru: string;
    title_ro: string;
    link: string;
    color: string
}

export interface QuestionProp {
    question: string;
}

export interface SurveyResult {
    contraPercentage: string;
    contraVotes: number;
    proPercentage: string;
    proVotes: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    nickname: string;
    phone: string | null;
    assignedNumber: number;
    role: string;
}

export interface UserInfo {
    id: number;
    firstName: string,
    lastName: string,
    assignedNumber: number
}

