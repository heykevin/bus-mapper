import express from 'express';
import request from 'superagent';
import {getTransHost} from './config.js';

const app = express();

// Allow requests from client
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Get Bus information from TransLink api as json
app.get("/busses/", function(req, response) {
  request
    .get(getTransHost())
    .accept('application/json')
    .type('application/json')
    .end((err, res) => {
      console.log('GET busses');
      if (err) {
        console.log('GET busses error');
        response.send(500).send("Broken");
      }
      response.send(res.body);
    });
});

app.listen(
  5000,
  () => console.log(`Listening on localhost:5000`)
);