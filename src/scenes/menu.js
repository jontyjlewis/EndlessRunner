// console.log("Hello from menu.js");

class Menu extends Phaser.Scene {
    constructor () {
        super("menu");
    }

    create() {
        this.add.text(game.config.width/2, game.config.height/2, "LIZARD QUEST").setOrigin(0.5, 0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 25, "A & D to move").setOrigin(0.5, 0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 50, "SPACE to jump, W to dash").setOrigin(0.5, 0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 100, "press SPACE to start").setOrigin(0.5, 0.5);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('play');
        }
    }
}