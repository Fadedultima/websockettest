var noRoomScreen;

function createNoRoom(){
	noRoomScreen = new createjs.Bitmap(queue.getResult("noRoom"));
	noRoomScreen.x = noRoomScreen.y = 0;
	stage.addChild(noRoomScreen);
	noRoomScreen.visible = false;
}
