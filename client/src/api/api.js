import request from 'superagent';
import {getServiceHost} from '../config.js';

export default class api {
  static getBus() {
    console.log('GET BUS');
    const path = 'busses/';
    return new Promise((resolve, reject) => {
      request
        .get(getServiceHost() + path)
        .end((err, res) => {
          console.log(res);
          err ? reject(err) : resolve(res.body);
        });
    });
  }
}
