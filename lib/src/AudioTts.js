import AbstractAudio from './AbstractAudio';
import AudioRequest from './AudioRequest';

export default class AudioTts extends AbstractAudio {
  constructor() {
    super();

    this._text = null;
    this._charset = null;
    this._speed = null;
    this._commit = null;
  }

  text(text = null) {
    if (text !== null) {
      this._text = text;
      return this;
    }
    return this._text;
  }

  charset(charset = null) {
    if (charset !== null) {
      this._charset = charset;
      return this;
    }
    return this._charset;
  }

  speed(speed = null) {
    if (speed !== null) {
      this._speed = speed;
      return this;
    }
    return this._speed;
  }

  commit(commit = null) {
    if (commit !== null) {
      this._commit = commit;
      return this;
    }
    return this._commit;
  }

  save() {
    const request = new AudioRequest(this);
    return request.send();
  }

  _body() {
    const body = super._body();

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
}
