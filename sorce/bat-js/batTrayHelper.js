const {Tray,Menu} = require('electron');
const templateTrayMenu = require('./templateTrayMenu');

module.exports = function (app){
    return {

        init(){    
            let tray = new Tray(__dirname+'/../app/img/icon-bat-50.png');
            tray.setToolTip('Bat Hosts');
            this.buildMenu(tray);
            return this.tray;
        },
    
        buildMenu(tray){
            let template = templateTrayMenu.getTemplateTray(app);
            let trayMenu = Menu.buildFromTemplate(template);
            tray.setContextMenu(trayMenu);
        }
    }
}