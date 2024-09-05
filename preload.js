const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('env', {
    API_KEY: process.env.API_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
});