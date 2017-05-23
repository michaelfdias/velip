'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractAudio2 = require('./AbstractAudio');

var _AbstractAudio3 = _interopRequireDefault(_AbstractAudio2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioFile = function (_AbstractAudio) {
  _inherits(AudioFile, _AbstractAudio);

  function AudioFile() {
    _classCallCheck(this, AudioFile);

    var _this = _possibleConstructorReturn(this, (AudioFile.__proto__ || Object.getPrototypeOf(AudioFile)).call(this));

    _this._file = null;
    _this._fullname = null;
    return _this;
  }

  _createClass(AudioFile, [{
    key: 'file',
    value: function file() {
      var _file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_file) {
        this._file = _file;
        return this;
      }
      return this._file;
    }
  }, {
    key: 'fullname',
    value: function fullname() {
      var _fullname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_fullname) {
        this._fullname = _fullname;
        return this;
      }
      return this._fullname;
    }
  }]);

  return AudioFile;
}(_AbstractAudio3.default);

exports.default = AudioFile;