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
    var username = req.body.result.parameters.name;
    var useraddress = req.body.result.parameters.address;
    return res.json({
    speech: "Hi"+ " "+ username + " " + ", we will deliver at your address" + " "+ useraddress + " " + "shortly" 
   });
});
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});


