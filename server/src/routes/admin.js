const { Router } = require('express');
const router = Router();

const adminController = require("../controllers/admin.controller");

router.get('/:usuario',adminController.getAdmin);
router.get('/',adminController.getAdministrators);
router.post('/',adminController.addAdmin);
router.delete("/:usuario",adminController.deleteAdmin);
router.put("/:usuario",adminController.updateAdmin);

module.exports = router;