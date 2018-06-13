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
  req.body.result &&
  req.body.result.parameters &&
  req.body.result.parameters.name
  req.body.result.parameters.address
  req.body.result.parameters.phoneno
  return res.json({
    speech: "Hi"+ name + "your address" + address + "and your phone no" + phoneno 
   });
});
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});


