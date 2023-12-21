// routes/products.js

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllProducts);
router.post('/add', productsController.addProduct); // New route for adding a product
router.delete('/delete/:productId', productsController.deleteProduct); // New route for deleting a product

module.exports = router;
