import axios from "axios";

// const express = require('express')
// const app = express()

const url = "https://convid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const res = await axios.get(url);
    
    return res
  } catch (error) {
    console.error(error);
  }
};


// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })

// module.exports = app