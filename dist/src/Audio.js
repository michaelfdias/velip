'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AudioTts = require('./AudioTts');

var _AudioTts2 = _interopRequireDefault(_AudioTts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Audio = function () {
  function Audio(credentials) {
    _classCallCheck(this, Audio);

    this._credentials = credentials;
  }

  _createClass(Audio, [{
    key: 'tts',
    value: function tts() {
      return new _AudioTts2.default(this._credentials);
    }
  }]);

  return Audio;
}();

exports.default = Audio;