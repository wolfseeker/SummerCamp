var BasicGame = {};

BasicGame.Preloader = function (game)
{
	this.background = null;
	
	this.ready = false;
}

BasicGame.Preloader.prototype = {
	preload: function()
	{
		game.load.tileMap('level 1', 'assets/sprites/level1.json',null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tiles-1', 'assets/sprites/tiles-1.png');
		game.load.spritesheet('dude', 'assets/sprites/dude.png',32,48);
		game.load.spritesheet('droid','assets/sprites/droid.png,',32,32);
		game.load.image('starSmall','assets/sprites/star.png');
		game.load.image('starBig','assets/sprites/star2.png');
		game.load.image('backround','assets/sprites/background2.png');
	}
	
	create: function()
	{
		this.state.start('Game');
	}
}