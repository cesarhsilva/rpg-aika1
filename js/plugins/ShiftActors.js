/*:
 * @plugindesc Lets you shift SV actors with notetags.
 * @author LadyBaskerville
 *
 * @param Default Shift X
 * @desc Default horizontal shift if no notetag is present
 * @default 0
 *
 * @param Default Shift Y
 * @desc Default vertical shift if no notetag is present
 * @default 0
 *
 * @help
 * ShiftActors.js
 * Version 1.1.0
 *
 * Use the following notetags in the actor notebox:
 * <ShiftX: n> to shift the actor n pixels to the right.
 * <ShiftY: n> to shift the actor n pixels down.
 * Use negative values of n to shift the actor in the opposite direction.
 *
 * If you want to offset many actors by the same amount, you can specify
 * default values for Shift X and Shift Y in the Plugin Parameters.
 * Actors without Shift notetags will be shifted by the values specified
 * in the parameters.
 *
 * Free for use in both non-commercial and commercial games.
 * No credit required.
 * Edits and reposts allowed.
 */

(function() {
	
var defShiftX = Number(PluginManager.parameters('ShiftActors')['Default Shift X']) || 0;
var defShiftY = Number(PluginManager.parameters('ShiftActors')['Default Shift Y']) || 0;

_Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
Sprite_Actor.prototype.setActorHome = function(index) {
	_Sprite_Actor_setActorHome.call(this, index);
	var id = this._actor._actorId;
	
	if ($dataActors[id].meta.ShiftX) {
		this.setHome(this._homeX + Number($dataActors[id].meta.ShiftX), this._homeY);
	} else {
		this.setHome(this._homeX + defShiftX, this._homeY);
	}
	if ($dataActors[id].meta.ShiftY) {
		this.setHome(this._homeX, this._homeY + Number($dataActors[id].meta.ShiftY));
	} else {
		this.setHome(this._homeX, this._homeY + defShiftY);
	}
};

})();