const Stream = require("stream");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const getPages = require("./helpers/getPages");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post("/", async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Content-Type", "application/json");

    const stream = new Stream();
    stream.pipe = getPages;

    await stream.pipe(
      res,
      req.body.url
    );
  } catch (error) {
    res.end(JSON.stringify(error));
  }
});

app.listen(8000, () => {
  console.log("Server start on: http://localhost:8000");
});
