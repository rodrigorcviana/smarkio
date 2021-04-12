const path = require('path');
const open = require('open');


async function frontend() {
  const frontendPath = path.join(__dirname, '../../../client/index.html');
  await open(frontendPath, { "wait": true });
}

frontend();