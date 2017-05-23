import moment from 'moment';

export default class Audio {
  constructor() {
    this._name = null;
    this._voice = null;
    this._expire = null;
    this._mp3 = null;
    this._display = null;

    this._voices = {
      male: 'fel',
      female: 'fad',
    };
  }

  name(name = null) {
    if (name !== null) {
      this._name = name;
      return this;
    }
    return this._name;
  }

  voice(voice = null) {
    if (voice !== null) {
      this._voice = voice;
      return this;
    }
    return this._voice;
  }

  expire(datetime = null, format = 'YYYY-MM-DD HH:mm') {
    if (datetime !== null) {
      this._expire = moment(datetime, format);
      return this;
    }
    return this._expire;
  }

  mp3(mp3 = null) {
    if (mp3 !== null) {
      this._mp3 = mp3;
      return this;
    }
    return this._mp3;
  }

  display(display = null) {
    if (display !== null) {
      this._display = display;
      return this;
    }
    return this._display;
  }

  _body() {
    const body = {};

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
}
