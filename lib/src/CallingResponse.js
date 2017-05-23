import moment from 'moment';
import parser from 'xml2json';

export default class CallingResponse {
  constructor(header, body) {
    this._header = header;
    this._code = null;
    this._status = null;

    this._build(body);
  }

  header() {
    return this._header;
  }

  code() {
    return this._code;
  }

  status() {
    return this._status;
  }

  _build(body) {
    const bodyInJson = parser.toJson(body, {
      object: true
    }).destination;

    this._code = bodyInJson.cd_cod;
    this._status = bodyInJson.cd_status;
  }
}
