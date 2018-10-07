const express = require('express')
const app = express()
const port = 3000
var router = express.Router();

// middleware to use for all /api endpoint
router.use(function(req, res, next) {
    // do logging
    console.log('Request from /api');
    next(); // make sure we go to the next routes and don't stop here
})

// Routes for /whoami
const whoami = require('./routes/whoami');
router.use('/whoami', whoami);

// Activate the router
app.use('/api', router)

// Error handling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something is broken')
})

app.listen(port, () => console.log(`Hamlog app listening on port ${port}!`))
