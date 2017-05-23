import moment from 'moment';
import parser from 'xml2json';

export default class AudioResponse {
  constructor(header, body) {
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

  header() {
    return this._header;
  }

  id() {
    return this._id;
  }

  wav() {
    return this._wav;
  }

  mp3() {
    return this._mp3;
  }

  isSaved() {
    return this._isSaved;
  }

  fileId() {
    return this._fileId;
  }

  duration() {
    return this._duration;
  }

  expire() {
    return this._expire;
  }

  status() {
    return this._status;
  }

  _build(body) {
    const bodyInJson = parser.toJson(body, {
      object: true
    }).wav;

    this._id = bodyInJson.cdw_id;
    this._wav = bodyInJson.cdw_url;
    this._mp3 = bodyInJson.cdw_url_mp3;
    this._isSaved = bodyInJson.cdw_file === 'NO' ? false : true;
    this._fileId = bodyInJson.cdw_file_prov;
    this._duration = bodyInJson.cdw_sec;
    this._expire = moment(bodyInJson.cdw_expires, 'YYYY:MM:DD');
    this._status = bodyInJson.cdw_status;
  }
}
