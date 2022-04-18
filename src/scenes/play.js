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
        this.add.rectangle(140, 0, 4, game.config.height, 0xFFFFFF).setOrigin(0.5 ,0);
        this.add.rectangle(280, 0, 4, game.config.height, 0xFFFFFF).setOrigin(0.5 ,0);
        this.add.rectangle(0, 150, game.config.width, 4, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 300, game.config.width, 4, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 450, game.config.width, 4, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 600, game.config.width, 4, 0xFFFFFF).setOrigin(0 ,0);

        // Player
        this.p1Lizard = new Lizard(this, game.config.width/2, 600, 'lizard').setOrigin(0.5, 1);

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