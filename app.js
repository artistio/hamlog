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

router.get('/whoami', function(req, res) {
    res.json({ callsign: 'yd0spu', 
	    operator: 'Benny Chandra',
	    location: {
		    countryIso: 'IDN',
		    continent: 'OC',
		    iota: 'OC021',
		    cqZone: '28',
		    ituZone: '54',
		    ituRegion: '3'
	    }
    });
})

app.use('/api', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
