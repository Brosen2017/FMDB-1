require("newrelic");
const body = require("body-parser");
const express = require("express");
const router = require("./routes");
const path = require("path");
const cors = require("cors");
const PORT = 8000;

const app = express();

app.use(cors());
app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use("/api", router);

app.listen(PORT, () => {
  console.log("successfully connected to port 8000");
});

module.exports = app;
