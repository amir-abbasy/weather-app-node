class ResponseHelper {
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
