import { Router } from "express";
import * as userController from '../controllers/users.controller.js';
import * as messagesController from '../controllers/messages.controller.js';
import { addProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from '../controllers/products.controller.js'
import { getAllCarts, createCart, deleteCart, addProductToCart, deleteProductFromCart, getProductsFromCart } from "../controllers/cart.controller.js";

const router = Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);

router.get('/messages', messagesController.getMessages);
router.post('/messages', messagesController.postMessage);
router.get('/messages/:id', messagesController.getMessage);

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products/', addProduct);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);

router.get('/cart', getAllCarts);
router.post('/cart', createCart);
router.delete('/cart/:id', deleteCart);
router.get('/cart/:id/products/:product_id', addProductToCart);
router.get('/cart/:id/products/', getProductsFromCart)
router.delete('/cart/:id/products/:product_id', deleteProductFromCart);

export default router;
