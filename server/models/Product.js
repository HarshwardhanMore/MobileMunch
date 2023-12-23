const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  brand: String,
  ram: String,
  processor: String,
  storageCapacity: String,
  refreshRate: String,
  cameraPixels: String,
  selfieCameraPixels: String,
  os: String,
  image: String, // Add the image field
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
