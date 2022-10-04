const { Router } = require('express');
const router = Router();
const centerController = require("./../controllers/medicCenter.controller");
const adminController = require("../controllers/admin.controller");
const chainsController = require("./../controllers/medicChain.controller");
const loginController = require("./../controllers/login.controller");
const medicController = require("./../controllers/medic.controller");
const coordinatorController = require("./../controllers/coordinator.comtroller");

router.post("/login/",loginController.getLogin);

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
router.put("/chain",chainsController.updateMedicChain);

router.get("/medic/:rut",medicController.getMedic);
router.get("/medic",medicController.getMedics);
router.post("/medic",medicController.addMedic);
router.delete("/medic/:rut",medicController.deleteMedic);
router.put("/medic/:rut",medicController.updateMedic);

router.get("/coordinator/:rut",coordinatorController.getCoordinator);
router.get("/coordinator",coordinatorController.getCoordinators);
router.post("/coordinator",coordinatorController.addCoordinator);
router.delete("/coordinator/:rut",coordinatorController.deleteCoordinator);
router.put("/coordinator/:rut",coordinatorController.updateCoordinator);

module.exports = router;