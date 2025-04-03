import { Request, Response, NextFunction } from "express";
import Product, { IProduct } from "../model/Product.ts";

export const stockCheck = (req: Request, res: Response, next: NextFunction) => {
    const { products } = req.body;

    products.forEach(async (e : IProduct) => {
        const p = await Product.findById(e)
        if(p !== undefined && p !== null && p.stock < 1)
            return res.status(400)
    });
    
    next();
};