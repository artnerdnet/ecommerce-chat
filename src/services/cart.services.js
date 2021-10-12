import Services from './services.js'

class CartServices extends Services {
  constructor(model) {
    super(model)
  }

  getAllCarts = async () => {
    try {
      const allCarts = await this.getAll();
      console.log('Carts found', allCarts);
      return allCarts;
    } catch (error) {
      console.log('There has been an error getting the carts:', error);
    }
  };

  getCartById = async (id) => { 
    try {
      const cart = await this.getById(id);
      console.log('Cart found', cart);
      return cart;
    } catch (error) {
      console.log('There has been an error getting the cart:', error);
    }
  }

  createCart = async () => {
    const timestamp = new Date()
    try {
      const cart = {
        timestamp: timestamp.toUTCString(),
        products: []
      }
      const newCart = await this.createDocument(cart);
      console.log('Cart created', newCart);
      return newCart;
    } catch (error) {
      console.log('There has been an error creating the cart:', error)
    }
  };

  getProductsFromCart = async (id) => {
    try {
      const cart = await this.getById(id);
      const { products } = cart;

      if (products.length) {
        console.log('Products found', products);
        return products;
      } else {
        console.log('No products found in cart.')
      }
    } catch (error) {
      console.log('There has been an error getting the cart:', error);
    }
  }

  addProductsToCart = async (cartId, productId) => {
    try {
      const cart = await this.getById(cartId);
      const updatedProducts = [...cart.products, productId];
      const updatedCart = await this.updateById(cartId, { products: updatedProducts });

      return updatedCart;
    } catch (error) {
      console.log('There has been an error updating the cart:', error);
    }
  }

  deleteProductFromCart = async (cartId, productId) => {
    try {
      const cartFound = await this.getCartById(cartId);

      if (!cartFound) {
        return "Cart not found";
      };
    
        const updatedProducts = cartFound.products.filter((product) => product != productId);    
        const updatedCart = await this.updateById(cartId, { products: updatedProducts });
  
        return updatedCart;
    } catch (error) {
      console.log('There has been an error updating the cart', error);
    }
  }

  deleteCart = async (id) => {
    try {
      const cart = await this.deleteById(id);
      console.log('Cart deleted', cart);
      return cart;
    } catch (error) {
      console.log('There has been an error deleting the cart:', error);
    }
  }
}

export default CartServices;