const express = require("express"),
  bodyParser = require("body-parser"),
  logger = require("morgan"),
  app = express(),
  cors = require("cors"),
  apiRoutes = require("./api-routes");

app.use(logger("dev"));
app.use(cors());
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
var port = process.env.PORT || 8080;
// Send message for default URL
app.get("/", (req, res) => res.send("Hello World with Express"));
// Use Api routes in the App
app.use("/api", apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running mock server on port " + port);
});
