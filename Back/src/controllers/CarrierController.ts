import { Request,Response } from 'express';
import Delivery from '../model/Delivery.ts';
import Carrier from '../model/Carrier.ts';

export default class CarrierController{

    static async createCarrier (req : Request,res : Response) {
        const { name, cnpj, type } = req.body;
        try {
            await new Carrier({
                name : name,
                cnpj : cnpj,
                type : type
            }).save()
            res.status(201).json("Success!");
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }

    static async getDeliveries(req:Request,res:Response){
        const { id } = req.params;
        try {
            const deliveries = await Delivery.find({carrier : id})

            const response = {
                message : "Success!",
                data : deliveries
            }
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: "Erro : ", error });
        }
    }
}