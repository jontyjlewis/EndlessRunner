class Gameover extends Phaser.Scene {
    constructor () {
        super("gameover");
    }

    create() {
        this.add.text(game.config.width/2, game.config.height/2, "GAMEOVER").setOrigin(0.5, 0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 25, "SPACE to restart").setOrigin(0.5, 0.5);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('play');
        }
    }
}