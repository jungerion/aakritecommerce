const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema =  new mongoose.Schema({
    fullName: {type:String},
    phoneNumber: {type:String}, 
    password: {type:String},
    conformPassword: {type:String},
    cartList: [{type:String}],
    favList: [{type:String}]
  });
  const User = mongoose.model('User', userSchema);

  module.exports =User
