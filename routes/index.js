var express = require('express');
var router = express.Router();
const productController = require("../controllers/product.controller");


const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./public/images/")
  },
  filename: (req, file, cb) => {
    const newFileName = Date.now() + file.originalname;
    return cb(null, newFileName);
  }
});
const upload = multer({ storage });


const mongoose = require("mongoose");

const verifyIfObjectId = (req, res, next) => {
  const { _id } = req.params;
  if (mongoose.Types.ObjectId.isValid(_id)) {
    return next();
  }
  return res.json({ error: "ObjectId is incorrect" })
}

/**
 *  @Path /
 * */
router.get('/', productController.showFormProduct);
router.post('/', upload.single('avatar'), productController.createProduct);
router.get("/list", productController.showProducts);
router.get("/delete/:_id", verifyIfObjectId, productController.deleteProductById);
router.get("/:_id", verifyIfObjectId, productController.showProductById);

module.exports = router;
