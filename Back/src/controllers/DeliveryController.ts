import { Request,Response } from 'express';
import Order from '../model/Order.ts';
import Delivery from '../model/Delivery.ts';
import Carrier from '../model/Carrier.ts';

export default class DeliveryController{

    static async createDelivery(req:Request,res:Response){
        const { carrier, order, status } = req.body;
        try {
            await new Delivery({
                carrier : carrier,
                order : order,
                status : status
            }).save()
            res.status(201).json("Success!");
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }

    static async updateDelivery(req:Request,res:Response){
        const { id } = req.params;
        const { status } = req.body;
        try {
            const delivery = await Delivery.findByIdAndUpdate(id, {status : status}, {new : true})
            const response = {
                message : "Success!",
                data : delivery
            }
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }

    static async getDelivery(req:Request,res:Response){
        const { id } = req.params;
        try {
            const delivery = await Order.findById(id)

            const response = {
                message : "Success!",
                data : delivery
            }
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }


}