var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express v 0.01 (PROD)' });
});

module.exports = router;
