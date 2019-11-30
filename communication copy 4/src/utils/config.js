import axios from 'axios';
import {allow} from './allow';
export const instance = axios.create({
      baseURL: 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master',
      timeout: 3000 
      //headers: {'API-KEY': 'A1243gjfhdj'}
    });

    export const instance2 = axios.create({
          baseURL: 'http://cricapi.com/api/',
          timeout: 3000 
          //headers: {'API-KEY': 'A1243gjfhdj'}
        });
// Global Setting
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['HCLAuthorization'] =localStorage.tokenId;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.interceptors.request.use(function (req) {
        console.log("Interceptor Called.... ",req) ; 
        if(allow.indexOf(req.url)==-1){
            req.tokenId = localStorage.tokenId;
        }  
        return req;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
    