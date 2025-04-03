import { Request,Response } from 'express';
import Customer from '../model/Customer.ts';
import Order, { IOrder } from '../model/Order.ts';

export default class CustomerController{

    static async createCustomer(req:Request,res:Response){
        const { name, email, phone, address } = req.body;
        try {
            await new Customer({
                name : name, 
                email : email, 
                phone : phone, 
                address : address
            }).save()
            res.status(201).json("Success!");
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }

    static async deleteCustomer(req:Request,res:Response){
        const { id } = req.params;
        try {
            await Customer.findByIdAndDelete(id)
            res.status(201).json("Success!");
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }

    static async getOrders(req:Request,res:Response){
        const { id } = req.params;
        try {
            const orders = await Order.find({customer : id})

            const response = {
                message : "Success!",
                data : orders
            }
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }


}
