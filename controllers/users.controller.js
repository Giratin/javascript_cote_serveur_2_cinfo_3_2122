
const { User } = require("../models/user.model");

const users = [
    { id: 1, firstName: "test", lastName: "test", email: "test@mail.com", age: 12 },
    { id: 2, firstName: "test 1", lastName: "test 2", email: "test.1@mail.com", age: 21 },
];

const incrementId = function () {
    if (users.length == 0) {
        return 1;
    } else {
        let lastUser = users[users.length - 1];
        let id = lastUser.id + 1;
        return id;
    }
}

module.exports = {
    createUser: function (req, res) {
        // const firstName = req.body.firstName;
        // const lastName = req.body.lastName;
        // const email = req.body.email;
        // const age = req.body.age;

        const { firstName, lastName, email, age } = req.body;
        const user = new User(incrementId(), firstName, lastName, email, age);
        users.push(user);

        res.json(user);
    },
    getUserById: function (req, res) {
        //const id = req.params.id;
        const { id } = req.params;
        const user = users.find(function (el) {
            return el.id == id
        });

        if (user != undefined) {
            return res.json(user)
        } else {
            return res.status(404).json({ message: "User could not be found" })
        }
    },
    getAllUsers: function (req, res) {
        res.json(users);
    },
    deleteUser: function (req, res) {
        const { id } = req.params;

        const index = users.findIndex(function (el) {
            return el.id == id;
        });

        if (index == -1) {
            return res.status(404).json({ message: "User not found" })
        } else {
            users.splice(index, 1);
            return res.json(users);
        }

    },
    updateUser: function (req, res) {

        const { id } = req.params;

        const index = users.findIndex(function (el) {
            return el.id == id;
        });

        if (index == -1) {
            return res.status(404).json({ message: "User not found" })
        } else {
            const { firstName, lastName, email, age } = req.body;
            
            users[index].firstName = firstName;
            users[index].lastName = lastName;
            users[index].email = email;
            users[index].age = age;
            
            
            // = { firstName, lastName, email, age };
            return res.json(users);
        }


    },
}