import mongoose, { Schema, Document } from "mongoose";
import { IProduct } from './Product.ts'
import { ICustomer } from "./Customer.ts";

export interface IOrder extends Document {
    customer : ICustomer
    products : IProduct[]
    status : string
}

const OrderSchema = new Schema<IOrder>({
    customer: { type: mongoose.Types.ObjectId, ref : 'Customer', required: true },
    products: [{type: mongoose.Types.ObjectId, ref: 'Product'}],
    status: { type: String, required: true },
});

const Order = mongoose.model<IOrder>("Order", OrderSchema);

export default Order;