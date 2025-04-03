import mongoose, { Schema, Document } from "mongoose";

export interface ICarrier extends Document {
    name : string
    cnpj : string
    type : string
}

const CarrierSchema = new Schema<ICarrier>({
    name : { type: String, required:  true},
    cnpj : { type: String, required:  true},
    type : { type: String, required:  true},
});

const Carrier = mongoose.model<ICarrier>("Carrier", CarrierSchema);

export default Carrier;