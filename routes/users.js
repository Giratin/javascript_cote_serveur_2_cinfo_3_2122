var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


const multer = require("multer");
const path = require("path");

//configuring multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //setting file destination
    cb(null, path.join(__dirname,'../public/images/'))
  },
  filename: function (req, file, cb) {
    //changing filename save after upload
    const newFileName = (+new Date()).toString() + "_" + file.originalname;
    cb(null, newFileName)
  }
})

//applying diskstorage informations to upload constant
const upload = multer({ storage });

//calling upload constant as a middleware and specifing 
//the fieldname avatar as the parameter name
router.post("/", upload.single('avatar'), (req, res) => {
  //retrieving file details from the request after being uploaded
  const file = req.file;
  //to serve the file we need just to specify it's path
  //Example localhost:3000/images/{filename}
  res.json({...req.body, file})
})

module.exports = router;