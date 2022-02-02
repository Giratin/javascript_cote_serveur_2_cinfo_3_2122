const router = require("express").Router();

const indexController = require("../controllers/index.controller");

/**
 * @PATH /students
 */

router.route("/")
    .post(indexController.createStudent)
    .get(indexController.getStudents)



module.exports = router;