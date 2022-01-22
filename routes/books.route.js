const express = require("express");
const router = express.Router();
const bookController = require("../controllers/books.controller");
/**
 * @PATH /books
 */

router.get("/", bookController.getAllBooks);
router.get("/getOne/:id", bookController.getOneById);


module.exports = router;