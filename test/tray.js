const {Application} = require('spectron');

describe('Inicialização da aplicação',() => {
    
    var app = new Application({
        path: "C:\\workspace\\bat-host\\"
    })

    app.start().then(()=>{
        console.log('app start');
    });

})

