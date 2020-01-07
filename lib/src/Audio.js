import AudioTts from './AudioTts';

export default class Audio {
  constructor(credentials) {
    this._credentials = credentials;
  }

  tts() {
    return new AudioTts(this._credentials);
  }
}
