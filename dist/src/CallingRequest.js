'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _CallingResponse = require('./CallingResponse');

var _CallingResponse2 = _interopRequireDefault(_CallingResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CallingRequest = function () {
  function CallingRequest(calling) {
    _classCallCheck(this, CallingRequest);

    this._calling = calling;

    this._method = 'POST';
    this._baseUrl = 'https://vox.velip.com.br';
    this._paths = ['pop', 'torpedo', 'MakeTTSCall.php'];
  }

  _createClass(CallingRequest, [{
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
        formData: this._calling._body(),
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

          resolve(new _CallingResponse2.default(header.headers, body));
        });
      });
    }
  }]);

  return CallingRequest;
}();

exports.default = CallingRequest;