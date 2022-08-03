const express = require("express");
router = express.Router();
eventsRoute = require("../controllers/eventsControllers");

router.get("/", eventsRoute.eventsController);
module.exports = router;