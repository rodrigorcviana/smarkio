const express = require('express');
const cors = require('cors');
const routes = require('./api/routes/message');

require('./loaders/frontend');
require('./database');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3030);
