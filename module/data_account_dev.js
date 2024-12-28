const { app, BrowserWindow } = require('electron/main')
const fs = require('fs');
const os = require('os');
const file_system = require("../files_system");



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

 
    win.loadFile('./template/data.html')
  
}

const store_data = (data) => {
    if (!fs.existsSync(file_system.data_ivatac())) {
        fs.mkdirSync(file_system.data_ivatac());
    }
    
    fs.writeFile( file_system.data_ivatac_files(), JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('data stored');
    });
}

const opendata = () => {
    fs.open(file_system.data_ivatac(), 'r', (err, fd) => {
        if (err) {
            if (err === undefined) {
                console.error('File does not exist');
                // createWindow(); pour ouvrir la fenetre de configuration de l'application si le fichier n'existe pas
                // ! fs.existsSync(file_system.data_ivatac()) == undefined
                app.whenReady().then(() => {
                  createWindow()
                })
            }
        }
    });
}

const create = () => {
    if (!fs.existsSync(file_system.data_ivatac())) {
        fs.mkdirSync(file_system.data_ivatac());
    }
}

module.exports = {
    store_data,
    opendata,
    create
}