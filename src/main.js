// Developers:  Jonathan Lewis
//              ---
//              ---
// Date: Started 4/13/2022
// Project: Endless Runner for CMPM 120 / ARTG 120 @ UCSC Spring 2022

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

let borderUISize = config.height / 30;  // should be 20px
let borderpadding = borderUISize / 2;   // 15px

// set aside keybinds
let keyA, keyD, keySPACE;