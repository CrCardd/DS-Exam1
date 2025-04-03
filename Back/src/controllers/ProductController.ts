import { Request,Response } from 'express';
import Delivery from '../model/Delivery.ts';
import Product from '../model/Product.ts';

export default class ProductController{

    static async createProduct(req:Request,res:Response){
        const { name, price, stock } = req.body;
        try {
            await new Product({
                name : name,
                price : price,
                stock : stock
            }).save()
            res.status(201).json("Success!");
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }

    static async deleteProduct(req:Request,res:Response){
        const { id } = req.params;
        try {
            await Product.findByIdAndDelete(id)
            res.status(201).json("Success!");
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }

    static async getAll(req:Request,res:Response){
        try {
            const products = await Product.find()

            const response = {
                message : "Success!",
                data : products
            }
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: "Error : ", error });
        }
    }


}