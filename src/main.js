// console.log("Hello from main.js");

let config = {
    type: Phaser.AUTO,
    scene: [Menu, Play],
    scale: {
        width: 420,
        height: 600,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
    }
};

let game = new Phaser.Game(config);

// set aside keybinds
let keyA, keyD, keySPACE;