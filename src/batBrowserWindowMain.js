const {BrowserWindow } = require('electron');

module.exports = function(){

    let batBrowserWindowMain = new BrowserWindow ({
        width:450,
        height:800,
        x:0,
        y:0,
        frame:false,
        resizable  :true,
        movable :true,
        show:false
    }); 

    batBrowserWindowMain.on('closed', () => {
        batBrowserWindowMain = null;
    });

    batBrowserWindowMain.loadURL(`file://${__dirname}/../app/html/index.html`);

    batBrowserWindowMain.show();

    return batBrowserWindowMain;
}
