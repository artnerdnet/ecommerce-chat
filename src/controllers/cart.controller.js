import CartServices from "../services/cart.services.js"
import CartModel from '../models/cart.model.js'

const cartServices = new CartServices(CartModel);

export const getAllCarts = (req, res) => {
  res.send(cartServices.getAllCarts())
}

export const createCart = (req, res) => {
  res.send(cartServices.createCart())
}

export const deleteCart = (req, res) => {
  const { id } = req.params;
  res.send(cartServices.deleteCart(id));
}

export const addProductToCart = (req, res) => {
  const { id, product_id } = req.params;
  res.send(cartServices.addProductToCart(id, product_id));
}

export const getProductsFromCart = (req, res) => {
  const { id } = req.params;
  res.send(cartServices.getProductsFromCart(id));
}

export const deleteProductFromCart = (req, res) => {
  const { id, product_id } = req.params;
  res.send(cartServices.deleteProductFromCart(id, product_id));
}
