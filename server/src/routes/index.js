const { Router } = require('express');
const router = Router();
const centerController = require("./../controllers/medicCenter.controller");
const adminController = require("../controllers/admin.controller");
const chainsController = require("./../controllers/medicChain.controller");

router.get("/center/:id",centerController.getMedicCenter);
router.get('/center',centerController.getMedicCenters);
router.post('/center',centerController.addMedicCenter);
router.delete("/center/:id",centerController.deleteMedicCenter);
router.put("/center/:id",centerController.updateMedicCenter);

router.get('/admin/:usuario',adminController.getAdmin);
router.get('/admin',adminController.getAdministrators);
router.post('/admin',adminController.addAdmin);
router.delete("/admin/:usuario",adminController.deleteAdmin);
router.put("/admin/:usuario",adminController.updateAdmin);


router.get("/chain/:nombre",chainsController.getMedicChain);
router.get('/chain',chainsController.getMedicChains);
router.post('/chain',chainsController.addMedicChain);
router.delete("/chain/:name",chainsController.deleteMedicChain);
router.put("/chain/:name",chainsController.updateMedicChain);


module.exports = router;