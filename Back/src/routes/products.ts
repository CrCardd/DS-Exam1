import express from 'express';
import ProductController from '../controllers/ProductController.ts';


export default express.Router()
    .post('', ProductController.createProduct)
    .get('', ProductController.getAll)
    .delete('/:id', ProductController.deleteProduct)
    