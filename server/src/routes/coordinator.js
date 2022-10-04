const { Router } = require('express');
const router = Router();

const coordinatorController = require("./../controllers/coordinator.comtroller");

router.get("/coordinator/:rut",coordinatorController.getCoordinator);
router.get("/coordinator",coordinatorController.getCoordinators);
router.post("/coordinator",coordinatorController.addCoordinator);
router.delete("/coordinator/:rut",coordinatorController.deleteCoordinator);
router.put("/coordinator/:rut",coordinatorController.updateCoordinator);

module.exports = router;