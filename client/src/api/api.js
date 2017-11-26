import request from 'superagent';
import {getTransHost} from '../config.js';

export default class api {
  static getBus() {
    console.log('getting busses');
    request
      .get(getTransHost())
      .withCredentials()
      .end((err, res) => {
        console.log('don');
        // console.log(res.body);
      });
  }
}