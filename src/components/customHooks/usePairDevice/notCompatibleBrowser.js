export const notCompatibleBrowser = (function() {
    const errMsg = "Your current browser is not compatible with WebBluetooth. Please see PlayGround Information for compatability details"
    const notCompatibleBrowser = new Error(errMsg);
    notCompatibleBrowser.name = "BrowserNotCompatible"
    return notCompatibleBrowser;
})();