const express = require("express");
const Weather = require("../controllers");
const router = express.Router();

router.get("/weather", Weather.getWeather);
router.get("/future-weather", Weather.getFutureWeather);
router.get("/ping", function (req, res) {
  res.send("pong");
});

module.exports = router;
