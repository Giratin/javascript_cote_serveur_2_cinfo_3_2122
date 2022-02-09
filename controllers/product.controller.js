const { Product } = require("../models/product.model");
const { User } = require("../models/user.model");


module.exports = {
    createProduct: async (req, res) => {
        const user = req.user; // const { user }=req;
        const product = new Product({ ...req.body });
        product.user = user;
        product.image = req.file.filename;
        await product.save();
        res.json(product);
    },
    verifyUserIdentity: async (req, res, next) => {
        const { id } = req.headers;
        if (!id) {
            return res.status(401).json();
        }

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json();
        }

        req.user = user;
        next();
    },
    getUserRelatedProducts: async (req, res) => {
        const { user } = req;
        const products = await Product.find({ user: user });
        res.json(products);
    },
    getAllProducts: async (req, res) => {
        const products = await Product.find();
        res.render('list', { products });
    },
    getProductById: async (req, res) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render('show', { product });
    },
    deleteProductById: async (req, res) => {
        const { id } = req.params;
        await Product.remove({ _id: id });
        res.redirect("/products/all")
    },
}