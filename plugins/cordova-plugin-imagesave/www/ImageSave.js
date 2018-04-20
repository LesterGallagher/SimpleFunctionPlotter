cordova.define("cordova-plugin-imagesave.ImageSave", function(require, exports, module) { var exec = require('cordova/exec');

var saveToAlbum = function(arg0, success, error) {
  exec(success, error, "ImageSave", "saveToAlbum", [arg0]);
};
window.plugins = window.plugins || {};
window.plugins.ImageSave = {saveToAlbum:saveToAlbum};
});
