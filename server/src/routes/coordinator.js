const { Router } = require('express');
const router = Router();

const coordinatorController = require("../controllers/coordinator.controller");

router.get("/:rut",coordinatorController.getCoordinator);
router.get("/",coordinatorController.getCoordinators);
router.post("/",coordinatorController.addCoordinator);
router.delete("/:rut",coordinatorController.deleteCoordinator);
router.put("/:rut",coordinatorController.updateCoordinator);

module.exports = router;