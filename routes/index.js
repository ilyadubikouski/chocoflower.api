var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express v 0.02 (PROD)' });
});

module.exports = router;
