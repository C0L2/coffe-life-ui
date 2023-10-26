export interface User {
    id: number;
    firstName: string;
    lastName: string;
    nickname: string;
    phone: string | null;
    assignedNumber: number;
    role: string;
}