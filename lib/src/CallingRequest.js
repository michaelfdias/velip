import request from 'request';
import Response from './CallingResponse';

export default class CallingRequest {
  constructor(calling) {
    this._calling = calling;

    this._method = 'POST';
    this._baseUrl = 'http://200.201.194.133';
    this._paths = [
      'pop',
      'torpedo',
      'MakeTTSCall.php'
    ];
  }

  _url() {
    const url = [ this._baseUrl ].concat(this._paths);
    return url.join('/');
  }

  _req() {
    return {
      method: this._method,
      formData: this._calling._body(),
      url: this._url(),
      timeout: 8000
    };
  }

  send() {
    return new Promise((resolve, reject) => {
      request(this._req(), (err, header, body) => {
        if (err) {
          reject(err);
          return
        }

        resolve(new Response(header.headers, body));
      });
    });
  }
}
