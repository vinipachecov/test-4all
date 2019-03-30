import axios from 'axios';

class RequestMaker {
  constructor() {
    this.instance =  axios.create({
      baseURL: 'http://dev.4all.com:3003/'
    });    
  }
}

export default new RequestMaker();