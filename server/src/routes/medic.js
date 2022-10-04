const { Router } = require('express');
const router = Router();

const medicController = require("./../controllers/medic.controller");

router.get("/medic/:rut",medicController.getMedic);
router.get("/medic",medicController.getMedics);
router.post("/medic",medicController.addMedic);
router.delete("/medic/:rut",medicController.deleteMedic);
router.put("/medic/:rut",medicController.updateMedic);

module.exports = router;