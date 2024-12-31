const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.webContents.openDevTools();
});

ipcMain.on('delete-bank-account', (event, accountName) => {
  // Logic to delete the bank account
  console.log(`Delete account: ${accountName}`);
});

ipcMain.on('create-bank-account', (event, account) => {
  // Logic to create the bank account
  console.log('Create account:', account);
});