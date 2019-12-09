const express = require('express');
const { simulatorController } = require('../controllers');
const { ensureLoggedInManager, ensureLoggedInProsumer } = require('../utils');
const router = express.Router();

router.get('/wind', simulatorController.getWind);

router.get('/householdConsumption', ensureLoggedInProsumer, simulatorController.getHouseholdConsumption);

router.get('/electricityPrice', simulatorController.getElectricityPrice);

router.get('/sellRatio', ensureLoggedInProsumer, simulatorController.getSellRatio);
router.post('/sellRatio', ensureLoggedInProsumer, simulatorController.postSellRatio);

router.get('/buyRatio', ensureLoggedInProsumer, simulatorController.getBuyRatio);
router.post('/buyRatio', ensureLoggedInProsumer, simulatorController.postBuyRatio);

router.get('/householdBuffer', ensureLoggedInProsumer, simulatorController.getHouseholdBuffer);

router.get('/powerplant/buffer', ensureLoggedInManager, simulatorController.getPowerplantBuffer);

router.get('/powerplant/bufferRatio', ensureLoggedInManager, simulatorController.getBufferRatio);
router.post('/powerplant/bufferRatio', ensureLoggedInManager, simulatorController.setBufferRatio);

router.post('/powerplant/start', ensureLoggedInManager, simulatorController.startPowerplant);

router.post('/powerplant/stop', ensureLoggedInManager, simulatorController.stopPowerplant);

router.get('/powerplant/status', ensureLoggedInManager, simulatorController.getPowerplantStatus);

router.get('/powerplant/production', ensureLoggedInManager, simulatorController.getPowerplantProduction);
router.post('/powerplant/production', ensureLoggedInManager, simulatorController.setPowerplantProduction);

module.exports = router;