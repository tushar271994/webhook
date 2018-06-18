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
  user: 'biwgsgwogqegzv',
  database: 'd72le63vkmsk9f', 
  password: '8d1c1c16d49473011d19280db3c05350093691f437d2e6eca8c3cd85dab07dd8', 
  port: 5432, 
  host:'ec2-107-21-255-2.compute-1.amazonaws.com'
 
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




