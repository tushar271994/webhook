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
  name='';
  address='';
  phoneno='';
  if (req.body.result.parameters.name){
    name = req.body.result.parameters.name;
  }
  if (req.body.result.parameters.address){
    address = req.body.result.parameters.address;
  }
  if (req.body.result.parameters.phoneno){
    phoneno = req.body.result.parameters.phoneno;
  }
  console.log("name is" , name);
  console.log("address is" , address);
  console.log("phoneno is" , phoneno);

return res.json({
    speech: "Hi"+ name + "your address " + address + "and your phone no" + phoneno
   });
});
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});


