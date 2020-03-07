var express = require('express')
  , router = express.Router()

router.use('/', require('./cereals'))

module.exports = router
