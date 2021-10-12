import mongoose from 'mongoose';

const schema = mongoose.Schema({
    timestamp: { type: Date, require: true },
    products: { type: Array, require: true },
});

const Cart = mongoose.model('carts', schema);

export default Cart