var express = require('express');
var router = express.Router();
const categoryController = require('../v1/controllers/categoryController');

router.get('/', (req, res, next) => {
    categoryController.fetchAll(req, res);
});

module.exports = router;