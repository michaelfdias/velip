'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _AudioResponse = require('./AudioResponse');

var _AudioResponse2 = _interopRequireDefault(_AudioResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AudioRequest = function () {
  function AudioRequest(audio) {
    _classCallCheck(this, AudioRequest);

    this._audio = audio;

    this._method = 'POST';
    this._baseUrl = 'http://200.201.216.94';
    this._paths = ['vox', 'GetAudioFile.php'];
  }

  _createClass(AudioRequest, [{
    key: '_url',
    value: function _url() {
      var url = [this._baseUrl].concat(this._paths);
      return url.join('/');
    }
  }, {
    key: '_req',
    value: function _req() {
      return {
        method: this._method,
        formData: this._audio._body(),
        url: this._url(),
        timeout: 8000
      };
    }
  }, {
    key: 'send',
    value: function send() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        (0, _request2.default)(_this._req(), function (err, header, body) {
          if (err) {
            reject(err);
            return;
          }

          resolve(new _AudioResponse2.default(header.headers, body));
        });
      });
    }
  }]);

  return AudioRequest;
}();

exports.default = AudioRequest;