const productModel = require("../models/product.model");


async function createProduct(req,res) {
    try {
        const {name,description,price,category,specs} = req.body;
        const product = await productModel.create({
            name,description,price,category,specs
        })

        if(!product){
            return res.status(401).json({
                message :"cant create product",
            })
        }

        return res.status(200).json(
            {
                message : "product created",
                product
            }
        )

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message :  "Server Error"
        })
    }
}


async function fetchProduct(req,res){
    
} 


module.exports = {createProduct};