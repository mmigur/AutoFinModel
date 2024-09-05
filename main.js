require('dotenv').config();

const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
    });
  
    // const startURL = isDev
    //   ? 'http://localhost:3000'
    //   : `file://${path.join(__dirname, '../build/index.html')}`;

    const startURL = 'http://localhost:3000';
  
    mainWindow.loadURL(startURL);
  
    mainWindow.on('closed', () => (mainWindow = null));
  }

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});