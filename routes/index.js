var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/calc', function(req, res, next) {
  res.render('cal', { title: 'sum' });
});

module.exports = router;
