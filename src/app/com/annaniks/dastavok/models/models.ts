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

export interface Verification {
    token: string;
}
export class User {
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
    verifyCode: number;
    image: string;

    constructor() {
        this.address = '';
        this.balance = 0;
        this.cardNumber = '';
        this.createdAt = '';
        this.cvv = '';
        this.exprires = '';
        this.fullName = '';
        this.id = 0;
        this.isVerified = false;
        this.password = '';
        this.phoneNumber = '';
        this.refreshToken = '';
        this.updatedAt = '';
        this.userName = '';
        this.verifyCode = 0;
        this.image = '';
    }
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
    metaData: MetaData;
}

export interface MetaData {
    count: number;
    pages: number;
}

export interface BriefCompany {
    address: string;
    code: number;
    createdAt: string;
    description: string;
    email: string;
    id: number;
    image: string;
    name: string;
    phoneNumber: string;
    zipCode: number;
}

export interface Restaurant {
    code: number
    description: string
    email: string
    id: number;
    image: string;
    name: string
    phoneNumber: string;
    review: number;
    zipCode: number;
    address: Address;
}
interface Address {
    latitude: number,
    longitude: number,
    text: string,
}

export interface Good {
    companyId: number,
    createdAt: string,
    description: string,
    goodTypeId: number,
    id: number,
    images: string,
    isDeal: boolean,
    name: string,
    price: number,
    readyTime: number,
    thumbnail: string,
    toppings: Topping[];
}

export interface Topping {
    createdAt: string
    description: string;
    goodId: number;
    id: number;
    name: string;
    stepPrice: number;
    updatedAt: string;
}