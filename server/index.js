const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(express.json());

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/carts', require('./routes/carts'));
app.use('/api/wishlist', require('./routes/wishlist'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
