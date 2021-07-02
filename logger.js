//trabalha com eventos
const EventEmitter = require('events');
//trabalha com arquivos do sistema
const fs = require('fs'); 
//para ajudar a pegar o caminho certo do log, independentemente de OS
const path = require('path');

const emitter = new EventEmitter();

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err
    })
})

function log(message) {
    emitter.emit('log', message)
} 

module.exports = log  