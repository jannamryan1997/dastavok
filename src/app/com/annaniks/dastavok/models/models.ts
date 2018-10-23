export interface MenuItem {
    label: string,
    routerLink: string
}

export interface ServerResponse<T> {
    data: T;
    message: Array<string>
}

export interface LoginResponse {
    data:User;
    refreshToken: string;
    token: string;
}

export interface PhoneVerification {
    token: string;
}

export interface User {
    address: string
    balance: number
    cardNumber:string
    createdAt: string
    cvv: string
    exprires: string
    fullName: string
    id: number
    isVerified: boolean
    password: string
    phoneNumber: string
    refreshToken: string
    updatedAt: string
    userName:string
    verifyCode:  number

}