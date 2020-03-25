var express = require('express');
var router = express.Router();
var request =require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request(' https://www.hpb.health.gov.lk/api/get-current-statistical', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var locals = JSON.parse(body);
      var local_total_cases = locals.data.local_total_cases.toString();
      var local_deaths = locals.data.local_deaths.toString();
      var local_recovered = locals.data.local_recovered.toString();
      var global_total_cases = locals.data.global_total_cases.toString();
      var global_recovered = locals.data.global_recovered.toString();
      var global_deaths = locals.data.global_deaths.toString();
      res.render('index', {lclCases : local_total_cases , lclDeaths : local_deaths ,lclRecovered : local_recovered , gblCases : global_total_cases , gblRecovered : global_recovered ,gblDeaths : global_deaths});
     // res.send(locals.data.global_new_cases.toString()  )
    }
  })
});

module.exports = router;
