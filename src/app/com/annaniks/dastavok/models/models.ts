export interface MenuItem {
    label: string,
    routerLink: string
}

export interface ServerResponse<T> {
    data: T;
    message: Array<string>
}

export interface LoginResponse {
    data: User;
    refreshToken: string;
    token: string;
}

export interface PhoneVerification {
    token: string;
}

export interface User {
    address: string
    balance: number
    cardNumber: string
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
    userName: string
    verifyCode: number

}

export interface GoodType {
    goods: Array<BriefGood>,
    id: number,
    name: string,
    parentGoodTypeId: number

}

export interface BriefGood {
    companyId: number,
    createdAt: string,
    description: string,
    goodTypeId: number,
    id: number,
    images: string
    isDeal: boolean,
    name: string,
    price: number,
    readyTime: number,
    thumbnail: string,
    unitId: number
    updatedAt: string
}
export interface Good {
    companyId: number
    createdAt: string;
    description: string;
    goodTypeId: number;
    id: number;
    images: string;
    isDeal: boolean;
    name: string;
    price: number;
    readyTime: number;
    thumbnail: string;
}

export interface Paginator<T> {
    data: T
    metaData: Array<MetaData>;
}

interface MetaData {
    count: number;
    pages: number;
}