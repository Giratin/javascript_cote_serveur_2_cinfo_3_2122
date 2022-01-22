var express = require('express');
var router = express.Router();


/**
 * @Path /
 */

router.get('/', function(req, res) {
  res.json({ message: "this is a message" })
});
// /test
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;