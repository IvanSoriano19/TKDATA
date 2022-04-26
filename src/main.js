const { BrowserWindow, app } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('src/index.html')
}

app.on('ready', createWindow)