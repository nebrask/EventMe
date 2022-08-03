const express = require("express");
Crouter = express.Router();
coordinatesRoute = require("../controllers/coordinateControllers");

Crouter.get("/", coordinatesRoute.coordinateController);
module.exports = Crouter;