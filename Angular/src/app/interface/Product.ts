import ObjectId from 'bson-objectid';

export interface IProduct {
    _id?: string,
    name: string,
    auther: string,
    published: string,
    description: string,
    image: string,
    price: number,
    quantity: number,
    date: string,
    categoryId: ObjectId
}