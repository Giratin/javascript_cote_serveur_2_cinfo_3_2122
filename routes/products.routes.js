const router = require("express").Router();
const productController = require("../controllers/product.controller");

/**
 * @Path /products
 */

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        const newFileName = Date.now() + "_" + file.originalname;
        cb(null, newFileName);
    }
});

const upload = multer({ storage });


router.route("/")
    .post(productController.verifyUserIdentity, upload.single('image'), productController.createProduct)
    .get(productController.verifyUserIdentity, productController.getUserRelatedProducts);

router.get("/all",productController.getAllProducts)
router.get("/:id",productController.getProductById)
router.get("/delete/:id", productController.deleteProductById)



module.exports = router;