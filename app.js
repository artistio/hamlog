const express = require('express');
const app = express();
var router = express.Router();
var mongoose = require ('mongoose');
var jwt = require ('jsonwebtoken');
var config = require ('./config/config');
var User = require ('./models/user');
var bodyParser = require('body-parser');

// Digesting all configuration and establishing DB Connection
var port = process.env.PORT || 3000;
mongoose.connect(config.database);
app.set('superSecret', config.secret);
app.use(bodyParser.json());

// middleware to use for all /api endpoint
router.use(function(req, res, next) {
    // do logging
    console.log('Request from /api');
    next(); // make sure we go to the next routes and don't stop here
})

// Activate the router
app.use('/api', require('./routes'))

// Error handling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something is broken')
})

app.listen(port, () => console.log(`Hamlog app listening on port ${port}!`))
