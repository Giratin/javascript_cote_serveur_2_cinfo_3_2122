const router = require("express").Router();
const userController = require("../controllers/users.controller");

/**
 * @PATH /user
 */

//retourner la liste des utilisateurs
router.get("/", userController.getAllUsers);
//créer un utilisateur
router.post("/", userController.createUser);

// router.route("/")
//     .get(userController.getAllUsers)
//     .post(userController.createUser);

//retourner un utilisateur selon son id
router.get("/:id", userController.getUserById);

//supprimer un utilisateur selon son id
router.delete("/:id", userController.deleteUser);

//modifier un utilisateur selon son id
router.put("/:id", userController.updateUser);

module.exports = router;