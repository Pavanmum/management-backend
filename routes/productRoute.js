import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { createProduct, deleteProduct, getAllProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

router.post('/',authenticate,createProduct);
router.get("/",authenticate,getAllProducts)
router.put("/",authenticate,getProductById)
router.delete("/",authenticate,deleteProduct)


export default router;