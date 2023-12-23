const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const cors = require("cors")
const multer = require('multer');
const path = require('path');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;



// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());


// Upload File

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save files in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
// ----------------------------------------------------------------

app.use('/uploads', express.static('uploads'));


// Routes
app.use('/api/products', require('./routes/products')(upload));
app.use('/api/carts', require('./routes/carts'));
app.use('/api/wishlist', require('./routes/wishlist'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
