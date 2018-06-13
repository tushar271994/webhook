const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res, next) {
  var speech=
  req.body.result &&
  req.body.result.parameters &&
  req.body.result.parameters.Quantity
  return res.json({
    speech: "you enter a quantity " + speech 
   });
});
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});


