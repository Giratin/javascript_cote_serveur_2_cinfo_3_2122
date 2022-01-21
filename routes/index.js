var express = require('express');
var router = express.Router();


/**
 * @Path /
 */

router.get('/', function(req, res) {
  res.status(404).render('index', { title: 'Express' });
});
// /test
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;