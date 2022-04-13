// console.log("Hello from menu.js");

class Menu extends Phaser.Scene {
    constructor () {
        super("menu");
    }

    create() {
        let menuText = this.add.text(250, 350, "welcome to the menu");
        menuText.setOrigin(0.5, 0.5);

        this.scene.start("play");
    }
}