const express = require('express');
const eventsApp = express();
const coordinatesApp = express();

eventsApp.use("/events/", require("./routes/eventRoutes"))
coordinatesApp.use("/coordinates/", require("./routes/coordinateRoutes"))

eventsApp.listen(3001, function() {
    console.log("HIIIIII! This is events server");
});
coordinatesApp.listen(3002, function() {
    console.log("HIII! This is coordinates server");
})