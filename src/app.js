const express = require("express");
const cors = require("cors");
const router = require("./routes");
const Helper = require("./helper");
const app = express();
// instance const app = express().

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(Helper.apiKeyMiddleware);

// set route in middleware
app.use(router);

// db connection

// Error handlers

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Development error handler
if (app.get("env") === "development") {
  app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.send({
      message: error.message,
      error: error,
    });
  });
}

// Production error handler
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.send({
    message: error.message,
    error: error,
  });
});

app.listen(port, () =>
  console.log(`Server is running on  http://localhost:${port}`)
);

// export default app;
