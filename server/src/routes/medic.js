const { Router } = require('express');
const router = Router();

const medicController = require("./../controllers/medic.controller");

router.get("/:rut",medicController.getMedic);
router.get("/",medicController.getMedics);
router.post("/",medicController.addMedic);
router.delete("/:rut",medicController.deleteMedic);
router.put("/:rut",medicController.updateMedic);

module.exports = router;