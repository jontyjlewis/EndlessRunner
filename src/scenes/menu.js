class Menu extends Phaser.Scene {
    constructor () {
        super("menu");
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

        this.add.text(game.config.width/2, 200, "LIZARD QUEST", textConfig).setOrigin(0.5, 0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 25, "A & D to move", textConfig).setOrigin(0.5, 0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 50, "W to dash", textConfig).setOrigin(0.5, 0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 150, "press SPACE to start", textConfig).setOrigin(0.5, 0.5);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('play');
            this.startSound = this.sound.play('sfx_menu');
        }
    }
}