import mongoose, { Schema, Document, Double } from "mongoose";

export interface IProduct extends Document {
    name : string
    price : number
    stock : number
}

const ProductSchema = new Schema<IProduct>({
    name : { type: String , required: true },
    price : { type: Number, required: true },
    stock : { type: Number, required: true },
});

const Product = mongoose.model<IProduct>("Product", ProductSchema);

export default Product;