const { Router } = require('express');
const router = Router();

const chainsController = require("./../controllers/medicChain.controller");

router.get("/:nombre",chainsController.getMedicChain);
router.get('/',chainsController.getMedicChains);
router.post('/',chainsController.addMedicChain);
router.delete("/:name",chainsController.deleteMedicChain);
router.put("/",chainsController.updateMedicChain);

module.exports = router;