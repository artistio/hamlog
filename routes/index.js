const express = require('express')
const app = express()
var router = express.Router()

router.use("/whoami", require("./whoami"))
router.use("/authenticate", require("./authenticate"))

module.exports = router

