const axios = require("axios");
const Helper = require("../helper");
const AppConfig = require("../config/index");

const weatherController = {
  getWeather(req, res) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${AppConfig.openweathermap_app_id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        Helper.handleJsonResponse(res, response.data);
      })
      .catch((error) => {
        Helper.handleErrorResponse(res, 500, error);
        console.log(error);
      });
  },

  getFutureWeather(req, res) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${req.query.lat}&lon=${req.query.lon}&exclude=current,minutely,hourly&appid=${AppConfig.openweathermap_app_id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        Helper.handleJsonResponse(res, response.data);
      })
      .catch((error) => {
        Helper.handleErrorResponse(res, 500, error);
        console.log(error);
      });
  },
};

module.exports = weatherController;
