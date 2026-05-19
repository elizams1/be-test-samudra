import { Router } from 'express';
import { getDiscount } from '../controllers/order.controller';

const router = Router();
router.post('/', getDiscount);

export default router;
