import Services from './services.js'

class ProductServices extends Services {
  constructor(model) {
    super(model)
  }

  getAllProducts = async () => {
    try {
      const allProducts = await this.getAll();
      console.log('Products found', allProducts);
      return allProducts;
    } catch (error) {
      console.log('There has been an error getting the products:', error);
    }
  };

  getProductById = async (id) => { 
    try {
      const product = await this.getById(id);
      console.log('Product found', product);
      return product;
    } catch (error) {
      console.log('There has been an error getting the product:', error);
    }
  }

  addProduct = async (product) => {
    try {
      const newProduct = await this.createDocument(product);
      console.log('Product created', newProduct);
      return newProduct;
    } catch (error) {
      console.log('There has been an error adding the product:', error)
    }
  };

  updateProduct = async (id, data) => {
    try {
      const product = await this.updateById(id, data);
      console.log('Product updated', product);
      return product;
    } catch (error) {
      console.log('There has been an error updating the product:', error);
    }
  }

  deleteProduct = async (id) => {
    try {
      const product = await this.deleteById(id);
      console.log('Product deleted', product);
      return product;
    } catch (error) {
      console.log('There has been an error deleting the product:', error);
    }
  }
}

export default ProductServices;