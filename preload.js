// Preload Script (preload.js)
const { contextBridge, ipcRenderer, webUtils } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    saveBankAccount: (newAccount) => ipcRenderer.send('create-bank-account', newAccount),
    deleteBankAccount: (account_name) => ipcRenderer.send('delete-bank-account', account_name),
});