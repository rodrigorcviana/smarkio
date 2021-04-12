const express = require('express');
const messageController = require('../controllers/messageController');

const routes = express.Router();

routes.get('/index', messageController.index);
routes.get('/audio/:id', messageController.audio);
routes.post('/create', messageController.create);
routes.delete('/delete/:id', messageController.delete);

module.exports = routes;