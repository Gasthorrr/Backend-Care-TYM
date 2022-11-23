const { Router } = require('express');
const router = Router();

const accountController = require("../controllers/patientAccount.controller");

router.post("/create_account",accountController.createAccount);