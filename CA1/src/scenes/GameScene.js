//13: Physics
class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init() {
    this.playerSpeed = 1.5;
    this.score = 0;
    this.scaleW = this.sys.game.config.width;
    this.scaleH = this.sys.game.config.height;
   
  }

  create() {
    this.createAudio();
    this.createInput();
    this.createBackground();
    this.createPlayer();
    this.createMoney();
    this.createEnemies();
    this.createText();
  
  }

  createAudio() {
    //play background loopFull
    // Adding Sounds
    this.music = this.sound.add("bgmusic");
    this.music.play();
  }

  createInput() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createBackground() {
    this.bg = this.add.sprite(0, 0, "background");
    this.bg.setOrigin(0, 0);
  }

  createPlayer() {
    
    this.player = this.physics.add.sprite(80, this.scaleH / 2, "dude");
    this.isPlayerAlive = true;
    this.isPlayerWinning = false;
    //this.player.score = 0;
    //this.player.money = 0;
    this.player.setCollideWorldBounds(true);
    
    

  
    // movement
    
  }


  createEnemies() {

    //1st police right
    var image = this.add.image(920, 90, 'enemy', 1);
    this.tweens.add({
      targets: image,
      props: {
        x: { flipX: true },
          y: { value: 500,  },
      },
      duration: 2500,
      ease: 'Power1',
      yoyo: true,
      repeat: -1
      
  });
    

//second police around
    var image2 = this.add.image(100, 80, 'enemy', 1); //se mueve bien

    this.tweens.add({
      targets: image2,
      props: {
          x: { value: 900, duration: 1600, flipX: true },
          y: { value: 500, duration: 10000,  },
      },
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: -1
  });
    
    //third police middle
    var image3 = this.add.image(800, 270, 'enemy', 1).setFlipX(true);
    this.tweens.add({
      targets: image3,
      props: {
          x: { value: 150, flipX: true },
         
      },
      duration: 3000,
      ease: 'Power2',
      yoyo: true,
      repeat: -1
    });

    
    //4th police horizontal down
    var image4 = this.add.image(900, 500, 'enemy', 1); 
    this.tweens.add({
      targets: image4,
      props: {
        x: { value: 100, duration: 1600, flipX: true },
        y: { },
         
      },
      ease: 'Power3',
      yoyo: true,
      repeat: -1
    });
    

    
     //5th police horizontal up
     var image5 = this.add.image(100, 90, 'enemy', 1).setFlipY(false); 
    this.tweens.add({
   targets: image5,
   props: {
    x: { value: 900, duration: 2000, flipX: true },
    y: { },
     
   },
    ease: 'Power1',
   yoyo: true,
   repeat: -1
});

  }

  createMoney() {
    //12: add  physics to group
    this.coins = this.physics.add.group({
      key: "coins",
      repeat: 2,
      score: 1,
      setXY: {
        x: this.scaleH / 2,
        y: this.scaleH / 2,
        stepX: 150,
        stepY: 0,
      }
    });
    Phaser.Actions.ScaleXY(this.coins.getChildren(), -0.5, -0.5);
    this.coins = this.physics.add.group({
      key: "coins",
      repeat: 4,
      score: 1,
      setXY: {
        x: 180,
        y: 60,
        stepX: 150,
        stepY: 0,
      }
    });
    Phaser.Actions.ScaleXY(this.coins.getChildren(), -0.5, -0.5);
    this.coins = this.physics.add.group({
      key: "coins",
      repeat: 7,
      score: 1,
      setXY: {
        x: 180,
        y: 500,
        stepX: 150,
        stepY: 0,
      }
    });
    Phaser.Actions.ScaleXY(this.coins.getChildren(), -0.5, -0.5);

    
    this.physics.add.overlap(
      this.player,
      this.coins,
      this.collectcoins,
      null,
      this
    );


  }

  collisionCheck(player, enemy) {
    console.log("overlap player enemy");
    player.isPlayerAlive = false;
    player.disableBody(true, true);
    this.gameOver();
  }

  
  collectcoinss(pl, tr) {
    console.log("treasure collected");
    pl.score += 5;
    tr.disableBody(true, true);
  }

  createText() {
    this.scoreText = this.add.text(630, 270, "score: 0", {
      fontSize: "40px",
      fill: "#fff",
    });
  }
  
  //end of enemies 


   /*update(){
  //08: check is player isPlayer dead -> exit the update loop
     if (!this.player.isPlayerAlive) {
     
      this.gameOver();
      return;
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-100);
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(100);
      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("turn");
    }
    
    //12: add a score to the game
    //console.log(this.player.score);
    this.scoreText.setText("score: " + this.player.score);

   
    // check for active input
    if (this.input.activePointer.isDown) {
      // player walks
      this.player.x += this.playerSpeed;
    }
    
   } */
   gameOver() {
    console.log("game Over")
    this.music.stop();
    this.scene.start("GameOver");
  }
  
 
    
}

