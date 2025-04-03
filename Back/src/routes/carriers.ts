import express, {Router} from 'express';
import CarrierController from '../controllers/CarrierController.ts';

const router : Router = express.Router();

export default router
    .post('', CarrierController.createCarrier)    
    .get('/:id/deliveries', CarrierController.getDeliveries)    



