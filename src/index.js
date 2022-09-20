const express = require('express');
const venom = require('venom-bot');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

venom
  .create({
    session: 'migracao',
    multidevice: true,
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
      console.log(message.from);
      client
        .sendText(
          message.from,
          'Olá, \n\nTudo bem?\n\nSou a Paula, assistente virtual do Hospital Paulista.\n\nEstamos centralizando nosso atendimento no WhatsApp oficial do Hospital, segue contato. \n\nhttps://api.whatsapp.com/send?phone=551150878700'
        )
        .then(() => {})
        .catch((erro) => {
          console.error('Error when sending: ', erro);
        });
    }
  });
}

module.exports = app;
