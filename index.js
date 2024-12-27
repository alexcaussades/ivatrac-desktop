const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')
const Ivao_api = require('./Ivao_api')
const { webContents } = require('electron')
//const data_account_dev = require('./module/data_account_dev')
const fs = require('fs')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
        plugins: true,
        webContents: true,
        webviewTag: true,
        devTools: true,
            
    }
  })
  win.loadFile('index.html')
}




app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})