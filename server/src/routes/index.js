const { Router } = require('express');
const router = Router();
const centerController = require("./../controllers/medicCenter.controller");
const adminController = require("./../controllers/admin.controller");

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

module.exports = router;