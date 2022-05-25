import { Document } from 'mongoose';
import { Category } from 'src/category/interface/category.interface';

export interface Product extends Document{
    title: string
    description: string
    price: Number
    category: Category

}