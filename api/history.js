"use strict";

const router = require("express").Router();
const axios = require("axios").default;

const options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/history',
    params: {country: 'usa', day: ''},
    headers: {
      'x-rapidapi-key': 'b1cc4577f1mshbdd7f58d8e1a216p1db623jsne9e893dccf1b',
      'x-rapidapi-host': 'covid-193.p.rapidapi.com'
    }
  };

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

// GET --> all history




module.exports = router;
