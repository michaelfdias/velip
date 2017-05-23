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

var CallingResponse = function () {
  function CallingResponse(header, body) {
    _classCallCheck(this, CallingResponse);

    this._header = header;
    this._code = null;
    this._status = null;

    this._build(body);
  }

  _createClass(CallingResponse, [{
    key: 'header',
    value: function header() {
      return this._header;
    }
  }, {
    key: 'code',
    value: function code() {
      return this._code;
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
      }).destination;

      this._code = bodyInJson.cd_cod;
      this._status = bodyInJson.cd_status;
    }
  }]);

  return CallingResponse;
}();

exports.default = CallingResponse;