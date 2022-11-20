const { Router } = require('express');
const router = Router();


const attentionController = require("../controllers/attention.controller");

//// see available attentions
router.get("/scheduleAttention",attentionController.getAvailableBlocks);

//// manage his own attentions
router.get("/attention/:id",attentionController.getAttention);
router.get("/attention",attentionController.getAttentions);
router.post("/attention",attentionController.addAttention);
router.delete("/attention/:id",attentionController.deleteAttention);




module.exports = router;