var express = require('express');
var router = express.Router();

/* GET note page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  res.render('note-book');
});

module.exports = router;
