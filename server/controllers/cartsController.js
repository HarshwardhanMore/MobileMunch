const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }).populate('products');
    res.json(cart || { products: [] });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addToCart = async (req, res) => {
  const { userId } = req.params;
  const { productId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    cart.products.push(product);
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const removeFromCart = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: 'Cart not found' });

    cart.products = cart.products.filter(p => p != productId);
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
};
