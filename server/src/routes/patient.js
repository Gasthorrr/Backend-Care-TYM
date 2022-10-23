const { Router } = require('express');
const router = Router();


const attentionController = require("../controllers/attention.controller");

router.get("/scheduleAttention",attentionController.getAvailableBlocks);



module.exports = router;