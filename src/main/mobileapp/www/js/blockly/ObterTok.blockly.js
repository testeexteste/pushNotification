window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.ObterTok = window.blockly.js.blockly.ObterTok || {};

/**
 * ObterTok
 */
window.blockly.js.blockly.ObterTok.Executar = function() {
 var item, token;
  this.cronapi.cordova.device.getFirebaseToken(function(sender_token) {
      token = sender_token;
    this.cronapi.util.callServerBlocklyNoReturn('blockly.Notifica:enviar', token);
  }.bind(this), function(sender_token) {
      token = sender_token;
  }.bind(this));
}
