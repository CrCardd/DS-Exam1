import { Express } from 'express';
import express from 'express'
import customers from './customers.ts'
import carriers from './carriers.ts';
import deliveries from './deliveries.ts';
import orders from './orders.ts';
import products from './products.ts';

export default function (app: Express) {
    app
        .use(express.json())
        .use('/customers', customers)
        .use('/carriers', carriers)
        .use('/deliveries', deliveries)
        .use('/orders', orders)
        .use('/products', products)
}