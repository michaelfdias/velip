# velip
Módulo de integração com a API de Voz da [Velip](http://www.velip.com.br).

## Instalação
```
npm i velip
```

## Pré requisito
Cadastrar no [painel da plataforma](https://vox04.velip.com.br/pop/vox/vox_login_cli.php) 
o IP da máquina que irá realizar as operações, pois essa é a forma da Velip identificar cada cliente.

## Como usar

### Para criar um torpedo de voz baseado em texto (TTS) na plataforma da Velip:
``` js
const Velip = require('velip');

const audio = new Velip.Audio();

const tts = audio.tts();
tts
  .text('Olá Mundo!')
  .save()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
```

### Para disparar um torpedo de voz logo após criá-lo:
``` js
const Velip = require('velip');

const audio = new Velip.Audio();
const calling = new Velip.Calling();
calling.to(11966669999);

const tts = audio.tts();
tts
  .text('Olá Mundo!')
  .save()
  .then(savedResponse => {
    calling.call(savedResponse)
      .then(calledResponse => console.log(calledResponse))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
```

### Para criar e disparar um torpedo de voz de uma só vez:
``` js
const Velip = require('velip');

const audio = new Velip.Audio();
const tts = audio.tts();
tts.text('Olá Mundo!');

const calling = new Velip.Calling();
calling
  .to(11966669999)
  .audio(tts)
  .call()
  .then(callingResponse => console.log(callingResponse))
  .catch(err => console.log(err));
```

### Para disparar um torpedo de voz que já está salvo na plataforma da Velip:
``` js
const Velip = require('velip');

const calling = new Velip.Calling();
calling
  .to(11966669999)
  .audio('tf816746363')
  .call()
  .then(callingResponse => console.log(callingResponse))
  .catch(err => console.log(err));
```
