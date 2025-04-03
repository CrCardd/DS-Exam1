import express from 'express';
import CustomerController from '../controllers/CustomerController.ts';


export default express.Router()
    .post('', CustomerController.createCustomer)
    .get('/:id/orders', CustomerController.getOrders)
    .delete('/:id', CustomerController.deleteCustomer)

    
