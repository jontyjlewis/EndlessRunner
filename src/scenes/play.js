console.log("hello from play.js");
class Play extends Phaser.Scene {
    constructor () {
        super("play");
    }

    preload() {
        this.load.image('lizard', './assets/lizard.png');
    }

    create() {
        let playText = this.add.text(200, 30, "welcome to the play area");
        playText.setOrigin(0.5, 0.5);

        this.p1Lizard = new Lizard(this, 250, 600, 'lizard').setOrigin(0.5, 0);

        // Lizard Keybinds
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        this.p1Lizard.update();
    }
}