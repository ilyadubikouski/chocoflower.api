var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Express is working properly v 0.01 (PROD)');
});

module.exports = router;
