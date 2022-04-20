// console.log("Hello from main.js");

let config = {
    type: Phaser.CANVAS,
    width: 420,
    height: 600,
    scene: [Menu, Play],
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
    }
};
let game = new Phaser.Game(config);

let borderUISize = config.height / 20;  // should be 20px
let borderpadding = borderUISize / 2;   // 10px

// set aside keybinds
let keyA, keyD, keySPACE;