import express from 'express';
import bodyParser from 'body-parser';
import request from 'superagent';
import {getTransHost} from './config.js';

const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
  request
    .get(getTransHost())
    .accept('application/json')
    .type('application/json')
    .end((err, res) => {
    		response.send('finsihed');
        console.log(res.body);
    });
});

app.listen(
  5000,
  () => console.log(`Listening on localhost:5000`)
);