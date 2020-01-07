import request from 'request';
import Response from './AudioResponse';

export default class AudioRequest {
  constructor(audio) {
    this._audio = audio;

    this._method = 'POST';
    this._baseUrl = 'https://vox.velip.com.br';
    this._paths = [
      'pop',
      'torpedo',
      'GetAudioFile.php'
    ];
  }

  _url() {
    const url = [ this._baseUrl ].concat(this._paths);
    return url.join('/');
  }

  _req() {
    return {
      method: this._method,
      formData: this._audio._body(),
      url: this._url(),
      timeout: 8000
    };
  }

  send() {
    return new Promise((resolve, reject) => {
      request(this._req(), (err, header, body) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(new Response(header.headers, body));
      });
    });
  }
}
