const { ipcRenderer} = require('electron');

console.log('Renderer');

console.log(Notification);

new Notification('Vai!!!',{
    body: `O curso foi iniciado!!`
});