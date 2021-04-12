const messageController = require('../controllers/messageController');
require('dotenv').config({ path: `${__dirname}/../../../.env` });
const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

async function setAudio(message) {
  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({ apikey: process.env.APIKEY }),
    serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com'
  });

  const params = {
    text: message.message,
    voice: 'pt-BR_IsabelaVoice', // Optional voice
    accept: 'audio/wav'
  };

  // Synthesize speech, correct the wav header, then save to disk
  // (wav header requires a file length, but this is unknown until after the header is already generated and sent)
  // note that `repairWavHeaderStream` will read the whole stream into memory in order to process it.
  // the method returns a Promise that resolves with the repaired buffer
  await textToSpeech
    .synthesize(params)
    .then(response => {
      const audio = response.result;
      return textToSpeech.repairWavHeaderStream(audio);
    })
    .then(repairedFile => {
      // fs.writeFileSync('./audio.wav', repairedFile);
      // console.log('audio.wav written with a corrected wav header');
      console.log('audio updated into database');
      messageController.internalUpdate(message.id, repairedFile);
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = { setAudio };