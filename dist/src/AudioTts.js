'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractAudio2 = require('./AbstractAudio');

var _AbstractAudio3 = _interopRequireDefault(_AbstractAudio2);

var _AudioRequest = require('./AudioRequest');

var _AudioRequest2 = _interopRequireDefault(_AudioRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioTts = function (_AbstractAudio) {
  _inherits(AudioTts, _AbstractAudio);

  function AudioTts(credentials) {
    _classCallCheck(this, AudioTts);

    var _this = _possibleConstructorReturn(this, (AudioTts.__proto__ || Object.getPrototypeOf(AudioTts)).call(this));

    _this._credentials = credentials;

    _this._text = null;
    _this._charset = null;
    _this._speed = null;
    _this._commit = null;
    return _this;
  }

  _createClass(AudioTts, [{
    key: 'text',
    value: function text() {
      var _text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_text !== null) {
        this._text = _text;
        return this;
      }
      return this._text;
    }
  }, {
    key: 'charset',
    value: function charset() {
      var _charset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_charset !== null) {
        this._charset = _charset;
        return this;
      }
      return this._charset;
    }
  }, {
    key: 'speed',
    value: function speed() {
      var _speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_speed !== null) {
        this._speed = _speed;
        return this;
      }
      return this._speed;
    }
  }, {
    key: 'commit',
    value: function commit() {
      var _commit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_commit !== null) {
        this._commit = _commit;
        return this;
      }
      return this._commit;
    }
  }, {
    key: 'save',
    value: function save() {
      var request = new _AudioRequest2.default(this);
      return request.send();
    }
  }, {
    key: '_body',
    value: function _body() {
      var body = _get(AudioTts.prototype.__proto__ || Object.getPrototypeOf(AudioTts.prototype), '_body', this).call(this);

      body.user = this._credentials.user || '';
      body.password = this._credentials.password || '';

      if (this.text() !== null) body.text = this.text();

      if (this.speed() !== null) body.rate = this.speed();

      if (this.charset() !== null) {
        body.encoding = this.charset();
      } else {
        body.encoding = 'UTF-8';
      }

      if (this.commit() === null || this.commit() === true) {
        body.ttswrt = 1;
      }

      return body;
    }
  }]);

  return AudioTts;
}(_AbstractAudio3.default);

exports.default = AudioTts;