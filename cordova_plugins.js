cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-imagesave/www/ImageSave.js",
        "id": "cordova-plugin-imagesave.ImageSave",
        "pluginId": "cordova-plugin-imagesave",
        "clobbers": [
            "cordova.plugins.ImageSave"
        ]
    },
    {
        "file": "plugins/cordova-save-image-gallery/www/saveImageGallery.js",
        "id": "cordova-save-image-gallery.saveImageGallery",
        "pluginId": "cordova-save-image-gallery",
        "clobbers": [
            "cordova.saveImageGallery"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-custom-config": "5.0.2",
    "cordova-plugin-splashscreen": "5.0.1",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-imagesave": "0.0.1",
    "cordova-save-image-gallery": "0.0.26",
    "cordova.plugins.diagnostic": "4.0.5"
}
// BOTTOM OF METADATA
});