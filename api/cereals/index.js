var express = require('express')
  , router = express.Router()
const controller = require('./controller');
// POST /verication?token=[string]&email=[string]
router.get('/api/cereals', controller.getCereals);
router.post('/api/update/cereals/:tur/:masoor', controller.setCereals);
router.get('/api/image/:img', controller.getImage);

module.exports = router;