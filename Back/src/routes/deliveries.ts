import express from 'express';
import DeliveryController from '../controllers/DeliveryController.ts';

export default express.Router()
    .post('', DeliveryController.createDelivery)
    .get('/:id', DeliveryController.getDelivery)
    .put(':id/status', DeliveryController.updateDelivery)