const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        label: String,
        price: Number,
        quantity: Number,
        image: String,
        user :{
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('product', productSchema);

module.exports = { Product }