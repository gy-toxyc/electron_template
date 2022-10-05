/*
**  
**  This is the main process of an Electron project.
**  The main process of an Electron project has access, uniquely, to the NodeJS and Electron modules.
**
*/

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')   //__dirname points to the project's directory.
    }
  })
  ipcMain.handle('ping', () => 'pong');   //If this recieves "ping" from the renderer, the window will answer with "pong" to the renderer.
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})
