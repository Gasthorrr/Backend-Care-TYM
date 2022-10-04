const { Router } = require('express');
const router = Router();

const adminController = require("../controllers/admin.controller");

router.get('/admin/:usuario',adminController.getAdmin);
router.get('/admin',adminController.getAdministrators);
router.post('/admin',adminController.addAdmin);
router.delete("/admin/:usuario",adminController.deleteAdmin);
router.put("/admin/:usuario",adminController.updateAdmin);

module.exports = router;