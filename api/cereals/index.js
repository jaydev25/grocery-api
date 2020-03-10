var express = require('express')
  , router = express.Router()
const controller = require('./controller');
// POST /verication?token=[string]&email=[string]
router.get('/api/cereals', controller.getCereals);
router.post('/api/update/cereals/:tur/:masoor', controller.setCereals);
router.get('/api/image/:img', controller.getImage);
router.post('/api/update/cereal/name/:id/:name', controller.setCerealName);
router.post('/api/cereal/add/:name', controller.addCereal);
router.post('/api/cereal/remove/:id', controller.removeCereal);

module.exports = router;
