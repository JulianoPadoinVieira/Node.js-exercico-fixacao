//importa o módulo OS
const os = require('os');

//importa a funçãod e outro módulo
const log = require('./logger');

setInterval(() => {
    //Estratégia de desestruturação
    //  const freemem = os.freemem
    //  const totalmem = os.totalmem
    const { freemem, totalmem } = os;

    const total = parseInt(totalmem() / 1024 / 1024);
    const mem = parseInt(freemem() / 1024 / 1024);
    const percents = parseInt((mem / total) * 100);

    const stats = {
        freemem: `${mem} MB`,
        total: `${total} MB`,
        usage:`${percents}%`,
    }

    console.clear();
    console.log('===== PC Stats =====');
    console.table(stats);

    log(`${JSON.stringify(stats)}\n`)



}, 1000);
