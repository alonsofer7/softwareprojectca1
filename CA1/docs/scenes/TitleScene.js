class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  init() {
    this.scaleW = this.sys.game.config.width; 
    this.scaleH = this.sys.game.config.height; 
  }

  create() {
  
    this.titleText = this.add.text(this.scaleW / 2, this.scaleH / 2, 'THE CHASE', { fontSize: '90px', fill: '#fff' });
    this.titleText.setOrigin(0.5);
    this.titleText.setTint(0xffff00,0xffff00, 0xffffff, 0xffffff);
    // create the Play game button
    this.startGameButton = new UiButton(this, this.scaleW / 2, this.scaleH * 0.65, 'button1', 'button2', 'GO', this.startScene.bind(this, 'Game'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}
