const { Router } = require('express');

const router = Router();
const controllers = require('./controllers');

router.get('/', controllers.getAppUsers);

module.exports = router;
