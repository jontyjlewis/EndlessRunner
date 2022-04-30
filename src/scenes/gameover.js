class Gameover extends Phaser.Scene {
    constructor () {
        super("gameover");
    }

    create() {
        let textConfig = {
            fontFamily: 'Impact',
            fontSize: '28px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 400
        }

        this.add.text(game.config.width/2, game.config.height/2, "GAMEOVER", textConfig).setOrigin(0.5, 0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 75, "SPACE to restart", textConfig).setOrigin(0.5, 0.5);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('play');
        }
    }
}