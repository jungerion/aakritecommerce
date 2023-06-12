const mongoose = require('mongoose');
const productSchema =  new mongoose.Schema({
    productName: String,
    productPrice: String,
    productDescription: String,
    productImage: {type: String, default: 'https://www.dealayo.com/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/l/e/lenovo-1005g1-laptop-1-nepal.jpg' }
  });
  const Product = mongoose.model('Product', productSchema);

  module.exports =Product
