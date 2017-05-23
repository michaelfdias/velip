'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _xml2json = require('xml2json');

var _xml2json2 = _interopRequireDefault(_xml2json);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AudioResponse = function () {
  function AudioResponse(header, body) {
    _classCallCheck(this, AudioResponse);

    this._header = header;
    this._id = null;
    this._wav = null;
    this._mp3 = null;
    this._isSaved = null;
    this._fileId = null;
    this._duration = null;
    this._expire = null;
    this._status = null;

    this._build(body);
  }

  _createClass(AudioResponse, [{
    key: 'header',
    value: function header() {
      return this._header;
    }
  }, {
    key: 'id',
    value: function id() {
      return this._id;
    }
  }, {
    key: 'wav',
    value: function wav() {
      return this._wav;
    }
  }, {
    key: 'mp3',
    value: function mp3() {
      return this._mp3;
    }
  }, {
    key: 'isSaved',
    value: function isSaved() {
      return this._isSaved;
    }
  }, {
    key: 'fileId',
    value: function fileId() {
      return this._fileId;
    }
  }, {
    key: 'duration',
    value: function duration() {
      return this._duration;
    }
  }, {
    key: 'expire',
    value: function expire() {
      return this._expire;
    }
  }, {
    key: 'status',
    value: function status() {
      return this._status;
    }
  }, {
    key: '_build',
    value: function _build(body) {
      var bodyInJson = _xml2json2.default.toJson(body, {
        object: true
      }).wav;

      this._id = bodyInJson.cdw_id;
      this._wav = bodyInJson.cdw_url;
      this._mp3 = bodyInJson.cdw_url_mp3;
      this._isSaved = bodyInJson.cdw_file === 'NO' ? false : true;
      this._fileId = bodyInJson.cdw_file_prov;
      this._duration = bodyInJson.cdw_sec;
      this._expire = (0, _moment2.default)(bodyInJson.cdw_expires, 'YYYY:MM:DD');
      this._status = bodyInJson.cdw_status;
    }
  }]);

  return AudioResponse;
}();

exports.default = AudioResponse;