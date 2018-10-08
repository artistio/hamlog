var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../config/config');

router.post('/', function (req, res) {
  // Get valid user and password from DB. Code below need to be updated
  var user = 'admin';
  var password = '4dmin0nly';

  if ((req.body.name == user) && (req.body.pass == password)) {
    // Authentication Successfull
    var payload = {
      "admin": "super"
    }
    var token = jwt.sign(payload, config.secret, {
      expiresIn: "1 day" // expires in 24 hours
    });
    res.json({
      success: true,
      message: 'Enjoy your token!',
      token: token
    });
  } else {
    // Authentication Failed
    res.json({ success: false, message: 'Authentication failed.' })
  }
})

module.exports = router;
