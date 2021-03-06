import express from 'express';
import request from 'superagent';
import axios from 'axios';
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
  // Superagent acting very weird all of a sudden so it is commented out
  // request
  //   .get(getTransHost())
  //   .accept('application/json')
  //   .type('application/json')
  //   .end((err, res) => {
  //     console.log('GET busses');
  //     if (err) {
  //       console.log('GET busses error');
  //       // response.send(500).send("Broken");
  //     }
  //     // console.log(res.body);
  //     console.log(getTransHost());
  //     console.log('superagent');
  //     console.log(res.body[0]);
  //     console.log(res.status);
  //     console.log(res.statusType);

  //     // response.send(res.body);
  //   });

  axios.get(getTransHost(), {headers: {Accept: 'application/json', Type:'application/json'}})
    .then(function (res) {
      response.send(res.data);
      console.log('axios');
    })
    .catch(function (error) {
      console.log(error);
      response.send(500).send("broken");
    });
  });

app.listen(
  5000,
  () => console.log(`Listening on localhost:5000`)
);