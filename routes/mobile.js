var express = require('express');
var router = express.Router();

/* GET mobile page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  res.render('mobile-main');
});

module.exports = router;
