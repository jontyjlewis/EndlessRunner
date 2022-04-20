console.log("hello from play.js");
class Play extends Phaser.Scene {
    constructor () {
        super("play");
    }

    preload() {
        // Player
        this.load.image('lizard', './assets/lizard.png');

        // Background
        this.load.image('background', './assets/Background/background.png');
    }

    create() {
        // let playText = this.add.text(200, 30, "welcome to the play area");
        // playText.setOrigin(0.5, 0.5);

        // background
        this.background = this.add.tileSprite(0, 0, 420, 600, 'background').setOrigin(0, 0);

        // Grid overlay
        // vertical
        this.add.rectangle(game.config.width/3, 0, 2, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - game.config.width/3, 0, 2, game.config.height, 0xFFFFFF).setOrigin(0.5 ,0);
        // horizontal
        this.add.rectangle(0, game.config.height/4, game.config.width, 2, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height/2, game.config.width, 2, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - game.config.height/4, game.config.width, 2, 0xFFFFFF).setOrigin(0 ,0);
        
        this.add.rectangle(0, 0, game.config.width, borderUISize*2 + borderpadding, 0x0000FF).setOrigin(0 ,0);

    
        // Borders
        // this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUISize - borderpadding, game.config.width, borderUISize + borderpadding, 0xFF0000).setOrigin(0 ,0);
	    this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);


        // Player
        this.p1Lizard = new Lizard(this, game.config.width/2, game.config.height - borderUISize - borderpadding*2, 'lizard').setOrigin(0.5, 1);

        // Player/Lizard Keybinds
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        // background
        this.background.tilePositionY -= 1;

        this.p1Lizard.update();
    }
}