const jsonfile = require('jsonfile-promised');
const fs = require('fs-extra');

module.exports = {
    atualizaHostsLocal(ambiente){
        
        let dirOrigem = `${__dirname}/../data/${ambiente}`;
        let dirDestino = '\\Windows\\System32\\drivers\\etc\\hosts';

        console.log(dirOrigem);
        console.log(dirDestino);

        fs.copy(dirOrigem, dirDestino)  
          .then(() => console.log('success!'))  
          .catch(err => console.error(err));
    }
    ,
    getHostsByAmbiente(nomeArquivo){

        fs.readFile( __dirname+'/../data/'+nomeArquivo ,'utf8', (err, data) => {
            if (err) throw err;
            console.log(++i + data);
        });
    }
}