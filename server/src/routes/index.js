const { Router } = require('express');
const router = Router();
const centerController = require("./../controllers/medicCenter.controller");
const adminController = require("./../controllers/user.controller");
const chainsController = require("./../controllers/medicChain.controller");

router.get("/center/:id",centerController.getMedicCenter);
router.get('/center',centerController.getMedicCenters);
router.post('/center',centerController.addMedicCenter);
router.delete("/center/:id",centerController.deleteMedicCenter);
router.put("/center/:id",centerController.updateMedicCenter);

router.get('/admins/:usuario',adminController.getAdmin);
router.get('/admins',adminController.getAdministrators);
router.post('/admins',adminController.addAdmin);
router.delete("/admins/:usuario",adminController.deleteAdmin);
router.put("/admins/:usuario",adminController.updateAdmin);


router.get("/chain/:name",chainsController.getMedicChain);
router.get('/chain',chainsController.getMedicChains);
router.post('/chain',chainsController.addMedicChain);
router.delete("/chain/:name",chainsController.deleteMedicChain);
router.put("/chain/:name",chainsController.updateMedicChain);


module.exports = router;