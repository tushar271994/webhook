"use strict";

const express = require("express");
const bodyParser = require("body-parser");

var pg = require("pg");
const restService = express();

restService.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

var Pool=require("pg").Pool;

var config = {
  user: 'xczuunvnoudnut',
  database: 'd6d5pepkhmvt0', 
  password: '05cb1062949a3e4e455b48b4ae2e90ac8bec3987f0f87a44733d54ddfa9445a2', 
  port: 5432, 
  host:'ec2-54-235-252-23.compute-1.amazonaws.com'
 
};
var  Pool = new Pool(config);
restService.use(bodyParser.json());

restService.post("/pizzabot", function(req, res, next) {
    var username = req.body.result.parameters.name
    var useraddress = req.body.result.parameters.address;

    Pool.connect(function(err, client, done) {
        if (err) {
          return next(err)
        }
        client.query('insert into demo(name,address)  values($1, $2)',
        [username, useraddress], function (err, result) {
          done() 
         if (err) {
            return next(err)
          }
         res.status(200);
        })
      })
      return res.json({
      speech: "Hi"+ " "+ username + " " + ", we will deliver at your address" + " "+ useraddress + " " + "shortly" 
      });
 });
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});




