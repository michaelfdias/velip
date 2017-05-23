'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CallingRequest = require('./CallingRequest');

var _CallingRequest2 = _interopRequireDefault(_CallingRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calling = function () {
  function Calling() {
    _classCallCheck(this, Calling);

    this._id = null;
    this._to = null;
    this._audio = null;
    this._priority = null;
    this._isBrazil = null;
    this._free = null;
    this._type = null;
  }

  _createClass(Calling, [{
    key: 'id',
    value: function id() {
      var _id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_id !== null) {
        this._id = _id;
        return this;
      }
      return this._id;
    }
  }, {
    key: 'to',
    value: function to() {
      var _to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_to !== null) {
        this._to = _to;
        return this;
      }
      return this._to;
    }
  }, {
    key: 'audio',
    value: function audio() {
      var _audio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_audio !== null) {
        this._audio = _audio;
        return this;
      }
      return this._audio;
    }
  }, {
    key: 'priority',
    value: function priority() {
      var _priority = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_priority !== null) {
        this._priority = _priority;
        return this;
      }
      return this._priority;
    }
  }, {
    key: 'isBrazil',
    value: function isBrazil() {
      var _isBrazil = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_isBrazil !== null) {
        this._isBrazil = _isBrazil;
        return this;
      }
      return this._isBrazil;
    }
  }, {
    key: 'free',
    value: function free() {
      var _free = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_free !== null) {
        this._free = _free;
        return this;
      }
      return this._free;
    }
  }, {
    key: 'type',
    value: function type() {
      var _type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (_type !== null) {
        this._type = _type;
        return this;
      }
      return this._type;
    }
  }, {
    key: '_body',
    value: function _body() {
      var body = {};

      if (this.id()) body.ctid = this.id();
      if (this.to()) body.dest = this.to();

      if (this.audio() !== null) {
        if (this.audio().constructor.name == 'AudioResponse') {
          body.content = this.audio().fileId();
        } else if (this.audio().constructor.name == 'String') {
          body.content = this.audio();
        }
      }

      if (this.priority() !== null) {
        body.priority = this.priority();
      } else {
        body.priority = 9999;
      }

      if (this.isBrazil() === false) {
        body.setbrasil = '';
      } else {
        body.setbrasil = 1;
      }

      if (this.free() === true) {
        body.free = 1;
      }

      if (this.type() !== null) {
        body.type = this.type();
      } else {
        body.type = 0;
      }

      return body;
    }
  }, {
    key: 'call',
    value: function call(audio) {
      this.audio(audio);

      var request = new _CallingRequest2.default(this);
      return request.send();
    }
  }]);

  return Calling;
}();

exports.default = Calling;