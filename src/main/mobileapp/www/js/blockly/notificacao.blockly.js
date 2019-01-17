window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Notificacao = window.blockly.js.blockly.Notificacao || {};

/**
 * notificacao
 */
window.blockly.js.blockly.Notificacao.Executar = function() {
 var item, notificacao;
  this.cronapi.cordova.device.getFirebaseNotificationData(function(sender_notificacao) {
      notificacao = sender_notificacao;
    this.cronapi.screen.notify('success',this.cronapi.object.getProperty(notificacao, 'msg'));
  }.bind(this), function(sender_item) {
      item = sender_item;
  }.bind(this));
}
