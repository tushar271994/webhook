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
  user: 'postgres',
  database: 'test', 
  password: 'tushar123', 
  port: 5433, 
  host:'localhost'
 
};
var  Pool = new Pool(config);
restService.use(bodyParser.json());

restService.post("/pizzabot", function(req, res, next) {
    var name = req.body.result.parameters.name
    var address = req.body.result.parameters.address;

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
      speech: "Hi"+ " "+ name + " " + ", we will deliver at your address" + " "+ address + " " + "shortly" 
      });
 });
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});




