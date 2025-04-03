import { Request,Response } from 'express';
import Order from '../model/Order.ts';
import Product, { IProduct } from '../model/Product.ts';

export default class OrderController{

    static async createOrder(req:Request,res:Response){
        const { customer, products, status } = req.body;
        try {
            await new Order({
                customer : customer,
                products : products,
                status : status
            }).save()
            res.status(201).json("Success!");
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }

    static async updateOrder(req:Request,res:Response){
        const { id } = req.params;
        try {

            const order_ = await Order.findById(id)
            if(order_?.status === "sended")
                return res.status(400).json({message : "This order was sended already"})
            const order = await Order.findByIdAndUpdate(id, {status : "canceled"}, {new : true})
            const response = {
                message : "Success!",
                data : order
            }
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }

    static async getOrdersByStatus(req:Request,res:Response){
        const { status } = req.query;
        try {
            const orders = await Order.find({status : status})

            const response = {
                message : "Success!",
                data : orders
            }
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }

    static async getOrder(req:Request,res:Response){
        const { status } = req.query;
        try {
            const orders = await Order.find({status : status})

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