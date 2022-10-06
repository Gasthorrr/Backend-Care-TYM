const { Router } = require('express');
const router = Router();

const specialtyController = require("../controllers/specialty.controller");

router.get("/:id",specialtyController.getSpecialty);
router.get('/',specialtyController.getSpecialties);
router.post('/',specialtyController.addSpecialty);
router.delete("/:id",specialtyController.deleteSpecialty);
router.put("/:id",specialtyController.updateSpecialty);

module.exports = router;