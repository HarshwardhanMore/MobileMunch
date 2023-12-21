const Wishlist = require('../models/Wishlist');
const Product = require('../models/Product');

const getWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ userId }).populate('products');
    res.json(wishlist || { products: [] });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addToWishlist = async (req, res) => {
  const { userId } = req.params;
  const { productId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    let wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      wishlist = new Wishlist({ userId, products: [] });
    }

    wishlist.products.push(product);
    await wishlist.save();

    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const removeFromWishlist = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) return res.status(404).json({ error: 'Wishlist not found' });

    wishlist.products = wishlist.products.filter(p => p != productId);
    await wishlist.save();

    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
};
