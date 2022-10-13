const { Router } = require('express');
const router = Router();

const attentionBlockController = require("./../controllers/attentionBlock.controller");

//// Attention Block management
router.get("/attention_block",attentionBlockController.getBlocks);
router.post("/attention_block",attentionBlockController.addBlock);
router.put("/attention_block",attentionBlockController.updateBlock);
router.delete("/attention_block",attentionBlockController.deleteBlock);

module.exports = router;
