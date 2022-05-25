import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({   
    title: String,
    description: String,
    price: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Category"
    },

},{timestamps: true, collection: 'product'})