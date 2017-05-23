'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Audio = function () {
  function Audio() {
    _classCallCheck(this, Audio);

    this._name = null;
    this._voice = null;
    this._expire = null;
    this._mp3 = null;
    this._display = null;

    this._voices = {
      male: 'fel',
      female: 'fad'
    };
  }

  _createClass(Audio, [{
    key: 'name',
    value: function name() {
      var _name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_name !== null) {
        this._name = _name;
        return this;
      }
      return this._name;
    }
  }, {
    key: 'voice',
    value: function voice() {
      var _voice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_voice !== null) {
        this._voice = _voice;
        return this;
      }
      return this._voice;
    }
  }, {
    key: 'expire',
    value: function expire() {
      var datetime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm';

      if (datetime !== null) {
        this._expire = (0, _moment2.default)(datetime, format);
        return this;
      }
      return this._expire;
    }
  }, {
    key: 'mp3',
    value: function mp3() {
      var _mp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_mp !== null) {
        this._mp3 = _mp;
        return this;
      }
      return this._mp3;
    }
  }, {
    key: 'display',
    value: function display() {
      var _display = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_display !== null) {
        this._display = _display;
        return this;
      }
      return this._display;
    }
  }, {
    key: '_body',
    value: function _body() {
      var body = {};

      if (this.name() !== null) body.name = this.name();

      if (this.voice() !== null) {
        body.voice = this._voices[this.voice()];
      }

      if (this.expire() !== null) {
        body.expires = this.expire().format('YYYY:MM:DD');
      }

      if (this.mp3() === null || this.mp3() !== true) {
        body.mp3 = 'NO';
      }

      if (this.display() !== null && this.display() === false) {
        body.type = 'ttsvar';
      }

      return body;
    }
  }]);

  return Audio;
}();

exports.default = Audio;