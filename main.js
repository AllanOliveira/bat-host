const {app} = require('electron');
const batTrayHelper = require('./src/batTrayHelper')(app);

app.setAppUserModelId("br.com.bathost");

app.on('ready',() => {
    console.log('Aplicação iniciada!');
    let batTray = batTrayHelper.build();
});