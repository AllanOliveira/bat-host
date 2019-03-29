const {Tray,Menu,globalShortcut} = require('electron');
const templateTrayMenu = require('./templateTrayMenu');

let template = null;
let trayMenu = null;

module.exports = function (app){
    return {

        getInstance(){    
            let tray = new Tray(__dirname+'/../app/img/icon-bat-50.png');
            tray.setToolTip('BatHosts');
            this.buildMenu(tray);
            return tray;
        },
    
        buildMenu(tray){
            template = templateTrayMenu.getTemplateTray(app);
            trayMenu = Menu.buildFromTemplate(template);
            this.registerglobalShortcutMenu();
            tray.setContextMenu(trayMenu);
        },

        registerglobalShortcutMenu(){

            let commandsMap = trayMenu.commandsMap;

            for(comandId in trayMenu.commandsMap){
                let commandMap = commandsMap[comandId]
                if(commandMap.accelerator)
                    globalShortcut.register(commandMap.accelerator, commandMap.click);
            }
            
        }
    }
}