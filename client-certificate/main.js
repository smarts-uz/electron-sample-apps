const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.commandLine.appendSwitch('client-certificate',
                             'client-certificate/ssl/client.crt');

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'width': 800,
    'height': 600,
    'autoHideMenuBar': true,
    webPreferences: {
      nodeIntegration: true}
  });

  mainWindow.loadURL('http://localhost:8080/');
});
