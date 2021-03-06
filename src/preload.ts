import {ipcRenderer, contextBridge} from 'electron';

contextBridge.exposeInMainWorld('bridge', {
  async openFile(...args) {
    return await ipcRenderer.invoke('open-file',...args);
  },

  async readFile(...args) {
    return await ipcRenderer.invoke('read-file', ...args);
  },

  async saveFile(...args) {
    return await ipcRenderer.invoke('save-file',...args);
  },

  async readDir(...args) {
    return await ipcRenderer.invoke('read-dir',...args);
  },

  async makeDir(...args) {
    return await ipcRenderer.invoke('make-dir',...args);
  }
});