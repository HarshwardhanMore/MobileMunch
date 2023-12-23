// controllers/productsController.js

const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addProduct = async (req, res) => {
  const {
    brand,
    ram,
    processor,
    storageCapacity,
    refreshRate,
    cameraPixels,
    selfieCameraPixels,
    os,
  } = req.body;

  const { filename } = req.file; // Assuming you are using Multer for file upload

  try {
    const newProduct = new Product({
      brand,
      ram,
      processor,
      storageCapacity,
      refreshRate,
      cameraPixels,
      selfieCameraPixels,
      os,
      image: `uploads/${filename}`, // Include the relative path
    });

    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
};
