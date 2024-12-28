const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')
const { webContents } = require('electron')
const data_account_dev = require('./module/data_account_dev')
const files_system = require('./files_system')
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
  if (!fs.existsSync(files_system.data_ivatac())) {
    fs.mkdirSync(files_system.data_ivatac());
    if (!fs.existsSync(files_system.data_ivatac_files())) {
      win.loadFile("./template/data.html")
    }    
  }else{
    win.loadFile('index.html')
  }
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