const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  brand: String,
  ram: String, // 4GB, 8GB, 12GB, 16GB, 32GB, 64GB Options Only
  processor: String,
  storageCapacity: String, // 32GB, 64GB, 128GB, 256GB, 1024GB, 2048GB Options Only
  refreshRate: String, // 60Hz, 90Hz, 120Hz, 144Hz, 165Hz Options Only
  cameraPixels: String, // 1MP, 2MP, 4MP, 8MP, 16MP, 32MP, 64MP, 108MP Options Only
  selfieCameraPixels: String,
  type: String, // Ios, Android Options Only
  os: String,
  charging: String,
  price: String,
  image: String, // Add the image field
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
