const { Router } = require('express');
const router = Router();


const patientController = require("../controllers/patient.controller");
router.post("/",patientController.getAccountState);



module.exports = router;