import express from 'express';
import OrderController from '../controllers/OrderController.ts';
import { stockCheck } from '../middlewares/orderMiddleware.ts';

export default express.Router()
    .post('', stockCheck, OrderController.createOrder)
    .get('', OrderController.getOrdersByStatus)
    .put('/:id/cancel', OrderController.updateOrder)
    .get('/tracking/:id')