const Product = require ('../model/product')

const getAllProducts =async (req,res)=>{
    const data = await Product.find()
    res.json({productList:data})
  }

  const addNewProducts =async (req,res)=>{
    const data = await Product.create(req.body)
    if(data) {
      res.json({
        msg: "product add success"
      })
    }
  }

  module.exports ={getAllProducts,addNewProducts}