const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fs = require('fs');
const filename = `./src/logs/new.txt`;

fs.closeSync(fs.openSync(filename, 'w'));

module.exports = app;
