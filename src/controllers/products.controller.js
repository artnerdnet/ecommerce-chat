import ProductsServices from "../services/product.services.js"
import formidable from 'formidable';
import ProductModel from '../models/product.model.js';

const productServices = new ProductsServices(ProductModel)

export const getAllProducts = async (req, res) => {
  try {
    const products = await productServices.getAllProducts();
    if (products) {
        res.status(200).send(products);
    } else {
        res.send('No products found.')
    }
  } catch (error) {
      res.status(500).send('There has been an error:', error)
  }
}

export const getProductById = async (req,res) => {
  try {
    const product = await productServices.getProductById(req.params.id);
    if (product) {
        res.status(200).send(product);
    } else {
        res.send('No product found.')
    }
  } catch (error) {
      res.status(500).send('There has been an error:', error)
  }
}

export const updateProductById = async (req,res,next) => {
    const form = new formidable.IncomingForm();
    const { id } = req.params
    try {
      await form.parse(req, (err, fields) => {
        if (err) {
          next(err);
          return;
        }
        const product = productServices.updateProduct(id, fields);
        if (product) {
          res.status(200).send(product);
        } else {
          res.status(200).send('No product found.');
        }
      });   
    } catch (error) {
      res.status(500).send('There has been an error:', error)
    }
}

export const addProduct = async (req,res,next) => {
    const form = new formidable.IncomingForm();
    try {
      await form.parse(req, (err, fields, files) => {
        if (err) {
          next(err);
          return;
        }
        const product = productServices.addProduct(fields);
        res.send(product)
      });    
    } catch (error) {
      res.status(500).send('There has been an error:', error)
    }
}

export const deleteProductById = async (req,res) => {
  const { id } = req.params;
  try {
      const deletedProduct = await productServices.deleteProduct(id);
      if (deletedProduct) {
          res.status(200).send(deletedProduct);
      } else {
          res.send('No product found.')
      }
  } catch (error) {
      res.status(500).send('There has been an error:', error)
  }
}
