import { Router } from 'express';
import { getDiscount } from '../controllers/order.controller';

const router = Router();
router.get('/',getDiscount);

export default router;