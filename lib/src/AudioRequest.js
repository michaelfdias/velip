import request from 'request';
import Response from './AudioResponse';

export default class AudioRequest {
  constructor(audio) {
    this._audio = audio;

    this._method = 'POST';
    this._baseUrl = 'http://200.201.194.130';
    this._paths = [
      'vox',
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
    };
  }

  send() {
    return new Promise((resolve, reject) => {
      request(this._req(), (err, header, body) => {
        if (err) reject(err);
        resolve(new Response(header.headers, body));
      });
    });
  }
}
