var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/version', function(req, res, next) {
  res.send({ 'version': '1.0.0' });
});

router.get('/echo', function(req, res, next) {
  res.send({ 'name': req.query.name });
});

router.post('/sum', function(req, res, next) {
  let a = parseInt(req.body.a)
  let b = parseInt(req.body.b)
  let sum = req.body.a && req.body.b ? a + b : 0;
  res.render( 'cal', {title: 'sum', sum: sum, a: a, b: b});
})

module.exports = router;
