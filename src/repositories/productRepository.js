import { write, read, findById, generateId } from "../utils/helpers";

class ProductsRepository {
  getAllProducts = () => {
    return read("./src/products.json");
  };

  getProductById = (id) => {
    const products = this.getAllProducts();
    const productFound = findById(products, id)
    if (!productFound) {
      return "Product not found";
    }

      return productFound;
  };

  addProduct = (newProduct) => {
    console.log(newProduct,'newProduct>>>')

    const products = this.getAllProducts();
    const newId = generateId(products);
    const addedProduct = {
      ...newProduct,
      id: newId,
      timestamp: new Date(),
    }
    const updatedProducts = [...products, addedProduct];
    write("./src/products.json", updatedProducts);
    return updatedProducts;
  };

  updateProduct = (productToUpdate) => {
    const products = this.getAllProducts();
    if (!findById(products, productToUpdate.id)) {
      return "Product not found";
    }
    
    const generatedTimestamp = new Date();
    const productUpdated = {...productToUpdate, timestamp: generatedTimestamp}
    const updatedProducts = products.map((product) =>
      product.id === productUpdated.id ? productUpdated : product
    );

    write("./src/products.json", updatedProducts);
    return updatedProducts;
  };

  deleteProductById = (id) => {
    const products = this.getAllProducts();
    const productFound = findById(products, id);
    if (!productFound) {
      return 'Product not found'
    }
    const updatedProducts = products.filter((product) => product.id != id);
    write("./src/products.json", updatedProducts);
    return updatedProducts;
  };
}

export default ProductsRepository;
