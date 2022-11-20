const { Router } = require('express');
const router = Router();


const attentionController = require("../controllers/attention.controller");
const specialtyController = require("../controllers/specialty.controller");
const medicController = require("../controllers/medic.controller");

//// see available specialties
router.get("/available_specialties",specialtyController.getSpecialtiesPatient);

//// see available medics
router.get("/available_medics",medicController.getMedicsPatient);

//// see available attentions
router.get("/available_attentions",attentionController.getAvailableBlocks);

//// manage his own attentions
router.get("/my_attentions/:id",attentionController.getAttention);
router.get("/my_attentions",attentionController.getAttentions);
router.post("/my_attentions",attentionController.addAttention);
router.delete("/my_attentions/:id",attentionController.deleteAttention);




module.exports = router;