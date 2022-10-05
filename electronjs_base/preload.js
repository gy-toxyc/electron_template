/*
**  
**  The preload process works as a bridge between the main process and every renderer process.
**  This process has access to everything.
**
**  Here, you state methods or variables to pass them through different processes.
**
*/

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
  // we can also expose variables, not just functions
})