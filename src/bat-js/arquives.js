const {Notification} = require('electron');
const jsonfile = require('jsonfile-promised');
const fs = require('fs-extra');

module.exports = {
    atualizaHostsLocal(ambiente){
        
        let dirOrigem = `${__dirname}/../data/${ambiente}`;
        let dirDestino = '\\Windows\\System32\\drivers\\etc\\hosts';

        fs.copy(dirOrigem, dirDestino)  
          .then(() => {
            console.log('success!');
            new Notification('Sucesso!');
          })  
          .catch(err => {
            console.error(err);
            new Notification('Erro!');
          });
    }
    ,
    getHostsByAmbiente(nomeArquivo){

        fs.readFile( __dirname+'/../data/'+nomeArquivo ,'utf8', (err, data) => {
            if (err) throw err;
            console.log(++i + data);
        });
    }
}