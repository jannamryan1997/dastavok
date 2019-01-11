export interface MenuItem {
    label: string,
    routerLink: string;
}

export interface ServerResponse<T> {
    data: T;
    message: Array<string>;

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
    refreshToken?: string;
}
export class User {
    address: string;
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
    chartOrdersCount: number;

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
        this.chartOrdersCount = 0;
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
interface Cordinate {
    latitude: number,
    longitude: number,
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
    toppingValue?
}
export interface Card {
    amount: number;
    companyName: string;
    totalAmount: number;
    orderId: number;
    goods: CardGoods[];
}

interface CardGoods {
    count: number;
    name: string;
    orderGoodId: number;
    price: number;
    images: string;
}

export interface OrderInfo {
    orderType: string;
    companyId?: number | string;
    good?: OrderGood;
    orders?: Array<number>;

}

interface OrderGood {
    id: number;
    count: number;
    toppings: Array<BriefToppings>
}

export interface BriefToppings {
    id: number;
    toppingValue: number;
}

export interface OrderHistory {
    companydata: CompanyData,
    driverdata: DeliverData,
    orderdata: OrderData,
}
interface CompanyData {
    address: Address,
    code: number,
    companyType: string,
    confirmed: boolean,
    createdAt: string,
    description: string,
    email: string,
    id: number,
    image: string,
    name: string,
    password: string,
    phoneNumber: string,
    refreshToken: string,
    updatedAt: string,
    userName: string,
    zipCode: number,
}
interface DeliverData {
    coordinate: Coordinate,
    createdAt: string,
    externalId: string,
    firstName: string,
    id: number,
    isFree: boolean,
    lastName: string,
    phoneNumber: string,
    updatedAt: string,
}
interface Coordinate {
    lat: number;
    lng: number;
}

interface OrderData {
    address: Address,
    buyDate: string,
    clientId: number,
    comment: string,
    companyId: number,
    createdAt: string,
    dispatcherId: number,
    driverId: number,
    driverToClientDate: string,
    driverToRestaurantDate: string,
    id: number,
    name: string,
    orderCompleteDate: string,
    orderStartDate: string,
    reviewId: string
    status: string,
    totalAmount: number,
    updatedAt: string,
}
export interface ClientDriver {
    companydata: ClientDriverCompanyData;
    driverdata: ClientDriverData;
    orderdata: ClientDriverOrderData;
}

interface ClientDriverCompanyData {
    address: Address;
    code: number;
    companyType: string;
    confirmed: boolean;
    createdAt: string;
    description: string;
    email: string;
    id: number;
    image: string;
    isSeen: boolean;
    name: string;
    password: string;
    phoneNumber: string;
    refreshToken: string;
    updatedAt: string;
    userName: string;
    visibility: boolean;
    zipCode: number;
}
interface ClientDriverData {
    cordinate: Cordinate;
    createdAt: string;
    externalId: string;
    firstName: string
    id: number;
    isFree: boolean;
    lastName: string;
    phoneNumber: string;
    updatedAt: string;
}
interface ClientDriverOrderData {
    address: Address;
    buyDate: string;
    clientId: number;
    comment: string;
    companyId: number;
    createdAt: string;
    dispatcherId: number;
    driverId: number;
    driverToClientDate: string;
    driverToRestaurantDate: string;
    id: number;
    name: string;
    orderCompleteDate: string;
    orderStartDate: string;
    reviewId: string;
    status: string;
    totalAmount: number;
    updatedAt: string;
}