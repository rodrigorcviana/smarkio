const model = require('../../models/Message');
const textToSpeech = require('../middlewares/textToSpeech');

module.exports = {
  async create(req, res) {
    let createdMessage = ''; 
    console.log(req.body.message);
    if(req.body.message.length){
      createdMessage = await model.create(req.body);

      textToSpeech.setAudio(createdMessage.dataValues);
    } else {
      res.status(404);
    }

    return res.json(createdMessage);
  },
  async delete(req, res) {
    const { id } = req.params;

    const result = await model.destroy({
      where: { id }
    });

    return res.json({ Status: true, result });
  },
  async index(req, res) {
    const messages = await model.findAll();

    return res.json(messages);
  },
  async audio(req, res) {
    const { id } = req.params;
    
    const message = await model.findOne({
      where: {
        id: id,
      }
    });

    res.set("content-type", "audio/wav");
    res.set("accept-ranges", "bytes");

    if (message.dataValues.hasOwnProperty('audio')) {
      res.write(message.audio);
    } else {
      res.status(404);
    }

    res.end();
  },
}

exports.internalUpdate = async (id, audio) => {
  await model.update({ audio }, {
    where: { id },
  });
}