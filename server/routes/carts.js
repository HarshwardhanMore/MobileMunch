const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/cartsController');

router.get('/:userId', cartsController.getCart);
router.post('/:userId/add', cartsController.addToCart);
router.delete('/:userId/remove/:productId', cartsController.removeFromCart);

module.exports = router;
