class ResponseHelper {
  static apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers["api-key"];
    if (apiKey && apiKey === "weather-app-asdk54w654346") {
      next(); // API key is valid, proceed to the next middleware or route handler
    } else {
      this.handleErrorResponse(res, 401, { error: "Invalid API key" });
    }
  };

  static handleJsonResponse(res, data) {
    res.json({
      status: true,
      data: data,
    });
  }

  static handleErrorResponse(res, code, error) {
    res.status(code).json({
      status: false,
      code,
      error,
    });
  }
}

module.exports = ResponseHelper;
