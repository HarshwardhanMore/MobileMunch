const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
