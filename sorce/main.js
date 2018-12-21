const {app} = require('electron');
const batTrayHelper = require('./bat-js/batTrayHelper')(app);

app.on('ready',() => {

    console.log('Aplicação iniciada!');
    let batTray = batTrayHelper.init();
});