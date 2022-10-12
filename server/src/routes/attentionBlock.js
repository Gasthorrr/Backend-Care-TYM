const { Router } = require('express');
const router = Router();

const attentionBlockController = require("./../controllers/attentionBlock.controller");

router.get("/",attentionBlockController.getBlocks);
/*
router.post("/",attentionBlockController.addBlock);
router.delete("/:id",attentionBlockController.deleteBlock);
router.put("/:id",attentionBlockController.updateBlock);
*/
module.exports = router;
