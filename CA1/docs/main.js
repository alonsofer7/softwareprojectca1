//13 physics
var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 563,
  scene: [
    BootScene,
    TitleScene,
    GameScene,
    WinScene,
    UiScene,
    GameOverScene
  ],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
        y: 0,
      },
    },
  },
};

var game = new Phaser.Game(config);
