var express = require('express');
var router = express.Router();
var data = require('../config/whoami.json');

router.get('/', function(req, res) {
    res.json(data)
})

module.exports = router;
