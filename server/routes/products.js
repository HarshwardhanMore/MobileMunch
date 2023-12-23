// routes/products.js

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


module.exports = (upload) => {
    router.get('/', productsController.getAllProducts);
    router.post('/add', upload.single('image'), productsController.addProduct); // New route for adding a product
    router.delete('/delete/:productId', productsController.deleteProduct); // New route for deleting a product

    return router;
}

// module.exports = router;
