// import express
import express from "express";
// import controllers
import {
	getProducts,
	getProductById,
	findProductById,
	saveProduct,
	updateProduct,
	deleteProduct
} from '../controllers/productControllers.js';

// express router
const router = express.Router();

// Route get All Products
router.get('/', getProducts);
// Route get single Product
router.get('/:id', findProductById);
// Route CREATE Product
router.post('/', saveProduct);
// Route UPDATE Product
router.patch('/:id', updateProduct);
// Route DELETE Product
router.delete('/:id', deleteProduct);

// export router
export default router;