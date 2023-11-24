import { ReactNode } from "react";

export interface FormData {
    nickname: string;
    mobileNumber: string;
}

export interface AddQuestion {
    question: string;
    nickname: string | null;
}

export interface ExpandableContentProps {
    initialHeight: number;
    expandedHeight: number;
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

export interface LoadingOverlayProps {
    isOpen: boolean;
}

export interface LoadingLayoutProps {
    children: ReactNode;
}

export interface AppProviderProps {
    children: React.ReactNode;
}

export interface Vote {
    answer_text: string;
    is_pro: boolean;
    question: number;
}