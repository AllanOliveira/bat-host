const {Notification} = require('electron');
const fs = require('fs-extra');

module.exports = {
    atualizaHostsLocal(ambiente, ambienteFantasia){
        
        let dirOrigem = `${__dirname}/../data/${ambiente}`;
        let dirDestino = '\\Windows\\System32\\drivers\\etc\\hosts';

        fs.copy(dirOrigem, dirDestino)  
          .then(() => {
            this.buildNotification( `${ambienteFantasia} ativado com sucessso o/ !!`).show();
          })  
          .catch(err => {
            this.buildNotification(ambienteFantasia + ' apresentou erro =(').show();
          });
    }
    ,
    getHostsByAmbiente(nomeArquivo){
        fs.readFile( __dirname+'/../data/'+nomeArquivo ,'utf8', (err, data) => {
            if (err) throw err;
            console.log(++i + data);
        });
    }
    ,

    buildNotification(texto){
        return new Notification({
            title:"BatHost",
            body:texto,
            icon: __dirname+"/../app/img/icon-bat-50.png"
        });
    }
}