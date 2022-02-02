
const { Student } = require("../models/student.model");
const { Classe } = require("../models/class.model");

module.exports = {
    createStudent: async (req, res) => {
        //Example of input (req.body)
        // const obj = {
        //     "name": "test",
        //     "email": "email@google.com",
        //     "class": "2CINFO3"
        // };

        //fetch classroom if exists
        let classRoom = await Classe.findOne({ name: req.body.class });

        //if classroom does not exists
        if (!classRoom) { // <=> if(classRoom == null){
            //create new instance of Classe
            classRoom = new Classe({ name: req.body.class });
            //save the Classe instance into the database
            await classRoom.save();
        }

        //create new instance for the student and assign the classroom
        const student = new Student({ 
            name: req.body.name, 
            email: req.body.email,
            classroom: classRoom
        });

        //save the Student instance into the database
        await student.save();
        res.json({ student });
    },
    getStudents: async (req, res) => {
        //fetch students and get the name of the classroom associated
        const students = await Student.find()
            .populate('classroom', 'name');
        res.json(students) 
    }
}
