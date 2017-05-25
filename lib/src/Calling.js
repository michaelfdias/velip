import Request from './CallingRequest';

export default class Calling {
  constructor() {
    this._id = null;
    this._to = null;
    this._audio = null;
    this._priority = null;
    this._isBrazil = null;
    this._free = null;
    this._type = null;
  }

  id(id = null) {
    if (id !== null) {
      this._id = id;
      return this;
    }
    return this._id;
  }

  to(to = null) {
    if (to !== null) {
      this._to = to;
      return this;
    }
    return this._to;
  }

  audio(audio = null) {
    if (audio !== null) {
      this._audio = audio;
      return this;
    }
    return this._audio;
  }

  priority(priority = null) {
    if (priority !== null) {
      this._priority = priority;
      return this;
    }
    return this._priority;
  }

  isBrazil(isBrazil = null) {
    if (isBrazil !== null) {
      this._isBrazil = isBrazil;
      return this;
    }
    return this._isBrazil;
  }

  free(free = null) {
    if (free !== null) {
      this._free = free;
      return this;
    }
    return this._free;
  }

  type(type = null) {
    if (type !== null) {
      this._type = type;
      return this;
    }
    return this._type;
  }

  _body() {
    const body = {};

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

  call(audio) {
    const request = new Request(this);

    if (typeof audio !== 'undefined'
    || this.audio().constructor.name == 'String') {
      this.audio(audio);
      return request.send();
    }

    if (this.audio().__proto__.__proto__.constructor.name == 'Audio') {
      return this.audio()
        .save()
        .then((audioResponse) => {
          this.audio(audioResponse);
          return request.send();
        });
    }

    return new Promise((resolve, reject) => {
      reject(new Error('Audio is invalid'));
    });
  }
}
