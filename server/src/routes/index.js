const { Router } = require('express');
const router = Router();
const centerController = require("./../controllers/medicCenter.controller");

router.get('/',centerController.getMedicCenter);

module.exports = router;