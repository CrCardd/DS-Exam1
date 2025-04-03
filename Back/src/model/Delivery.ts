import mongoose, { Schema, Document, mongo } from "mongoose";
import { IOrder } from "./Order.ts";
import { ICarrier } from "./Carrier.ts";

interface IDelivery extends Document {
    order : IOrder
    carrier : ICarrier
    status : string
}

const DeliverySchema = new Schema<IDelivery>({
    order : { type: mongoose.Types.ObjectId, required: true },
    carrier : { type: mongoose.Types.ObjectId, required: true },
    status : { type: String, required: true },
});

const Delivery = mongoose.model<IDelivery>("Delivery", DeliverySchema);

export default Delivery;