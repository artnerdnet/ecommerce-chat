import { write, read, findById, generateId } from "../utils/helpers";

class CartRepository {
  getAllCarts = () => {
    return read("./src/cart.json");
  };

  createCart = () => {
    const allCarts = this.getAllCarts();
    const newCart = {
      id: generateId(allCarts),
      timestamp: new Date(),
      products: [],
    }
    const updatedCarts = [...allCarts, newCart];
    write("./src/cart.json", updatedCarts);
    return updatedCarts;
  }

  deleteCart = (id) => {
    const carts = this.getAllCarts();
    const cartFound = findById(carts, id);
    if (!cartFound) {
      return 'Cart not found'
    }
    const updatedCarts = carts.filter((cart) => cart.id != id);
    write("./src/cart.json", updatedCarts);
    return updatedCarts;
  };

  addProductToCart = (id, product) => {
    const carts = this.getAllCarts();
    const cartFound = findById(carts, id);

    if (!cartFound) {
      return "Cart not found";
    };

    const updatedProducts = [...cartFound.products, product];
    const updatedCart = {...cartFound, products: updatedProducts}
    const updatedCarts = carts.map((cart) =>
      cart.id === cartFound.id ? updatedCart : cart
    );

    write("./src/cart.json", updatedCarts);
    return updatedCart;
  };

  getProductsFromCart = (id) => {
    const carts = this.getAllCarts();
    const cartFound = findById(carts, id);

    if (!cartFound) {
      return "Cart not found";
    };
    
    return cartFound.products;
  };


  deleteProductFromCart = (id, productId) => {
    const carts = this.getAllCarts();
    const cartFound = findById(carts, id);

    if (!cartFound) {
      return "Cart not found";
    };

    const updatedCartProducts = cartFound.products.filter((product) => product.id != productId);
    const updatedCarts = carts.map((cart) =>
      cart.id === cartFound.id ? {...cartFound, products: updatedCartProducts} : cart
    );

    write("./src/cart.json", updatedCarts);
    return updatedCarts[id];
  };
}

export default CartRepository;
