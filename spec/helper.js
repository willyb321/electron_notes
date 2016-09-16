var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'ElectronNotes-darwin-x64', 'ElectronNotes.app', 'Contents', 'MacOS', 'ElectronNotes');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'ElectronNotes-linux-x64', 'ElectronNotes');
      default:
        throw 'Unsupported platform';
    }
  }
};
