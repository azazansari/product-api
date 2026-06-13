require('dotenv').config();

const errorHandler = require('./middleware/errorHandler');
const express = require('express');
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/products', productRoutes);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});