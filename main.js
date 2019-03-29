const {app} = require('electron');
const batTrayIcon = require('./src/batTrayIcon')(app);
const batBrowserWindowMain = require('./src/batBrowserWindowMain')

app.setAppUserModelId("br.com.bathost");

app.on('ready',() => {
    console.log('Aplicação iniciada!');
    
    let batTray = batTrayIcon.getInstance(app);
    let mainWindow = batBrowserWindowMain();
    
    batTray.on('click', 
        () => mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
    );

});