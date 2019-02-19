/*:
 * @plugindesc Permite que o jogo seja encerrado
 *
 * @author Lima
 *
 * @param ShutDownName
 * @desc Nome do comando para encerrar o jogo
 * @default Sair
 *=============================================================================*/
 

var params = PluginManager.parameters('sair');


Window_TitleCommand.prototype.makeCommandList = function(name) {
    this.addCommand(TextManager.newGame,   'newGame');
    this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
    this.addCommand(TextManager.options,   'options');
	this.addCommand(String(params['ShutDownName'] || 'Sair'),   'sair');
};

Scene_Title.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_TitleCommand();
    this._commandWindow.setHandler('newGame',  this.commandNewGame.bind(this));
    this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
    this._commandWindow.setHandler('options',  this.commandOptions.bind(this));
	this._commandWindow.setHandler('sair',  this.commandSair.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_Title.prototype.commandSair = function() {
this.fadeOutAll()
  SceneManager.exit()
}

Scene_GameEnd.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_GameEnd();
    this._commandWindow.setHandler('toTitle',  this.commandToTitle.bind(this));
    this._commandWindow.setHandler('cancel',   this.popScene.bind(this));
	this._commandWindow.setHandler('sair',   this.commandSair.bind(this));
	
    this.addWindow(this._commandWindow);
};

Scene_GameEnd.prototype.commandSair = function() {
this.fadeOutAll()
  SceneManager.exit()
}

Window_GameEnd.prototype.makeCommandList = function() {
    this.addCommand(TextManager.toTitle, 'toTitle');
    this.addCommand(TextManager.cancel,  'cancel');
	this.addCommand(String(params['ShutDownName'] || 'Sair'),   'sair');
};