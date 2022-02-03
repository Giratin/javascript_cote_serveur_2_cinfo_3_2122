
const { Product } = require("../models/product.model");
const fs = require("fs");

const deleteImage = (image) => {
    fs.rm(`./public/images/${image}`, (err,data)=>{
        if(err){
            console.log({ err });
        }else{
            console.log({ data });
        }
    })
}

module.exports = {
    showFormProduct: (req, res) => {
        res.render('create');
    },
    createProduct: async (req, res) => {
        const product = new Product({ ...req.body });
        if (req.file) {
            product.image = req.file.filename;
        }

        await product.save();
        res.redirect("/list")
        // res.json(product)
    },
    showProducts: async (req, res) => {
        const products = await Product.find();
        console.log(products);
        deleteImage()
        res.render('products', { products });
    },
    showProductById: async (req, res) => {
        const { _id } = req.params;
        const product = await Product.findById(_id);
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        // res.json(product);
        res.render('details', { product });
    },
    deleteProductById: async (req, res) => {
        const { _id } = req.params;

        const product = await Product.findByIdAndDelete(_id);

        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }

        deleteImage(product.image);

        res.redirect('/list');
    }
}