// **********************************************************************************************
// **********************************************************************************************
//
// Game Title: Lizard Quest
//
// Developers:  Jonathan Lewis
//              Jacqui Goodykoontz
//              Lucas Moore
//
// Date: Started  - 4/13/2022
//       Finished - 5/2/2022
//
// Creative Tilt: 
//      - Programming:  Particularly proud of the random spawning solution we ended up using.
//                      It calls from a list of preset spawn options to send down the screen
//                      with a "harder" wave every 5 seconds.  Along side speed increases 
//                      every 15 seconds, it gives a randomized and different experience 
//                      each run you play.
// 
//      - Visual:       We're really proud of the panel art our game uses in the webpage
//                      It helps set our theme of the type of game you could find in an arcade
//                      where the panel art would be on the side of the machine and be
//                      recognizable.
//
// Project: Endless Runner for CMPM 120 / ARTG 120 @ UCSC Spring 2022
//
// **********************************************************************************************
// **********************************************************************************************

let config = {
    type: Phaser.CANVAS,
    width: 420,
    height: 600,
    parent: "phaser_canvas",
    mode: Phaser.Scale.FIT,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [Preload, Menu, Play, Gameover],
    scale: {
        autoCenter: Phaser.Scale.CENTER_HORIZONTAL,
        mode: Phaser.Scale.FIT
    },
};
let game = new Phaser.Game(config);

let borderUISize = config.height / 30;  // should be 20px
let borderpadding = borderUISize / 2;   // 10px

let score;
let endScore;
let multiplier = 0.5;

let gameSpeed = 2.5;
let hardSpawn = 0;
let training = true;
let trainSpawn = 1;
let trainingText;

let lane1 = config.width/6;
let lane2 = config.width/2;
let lane3 = config.width * (5/6);
let rowAlert = game.config.height - borderUISize - borderpadding;
let row0 = game.config.height - borderUISize - borderpadding * 10;
let row1 = config.height* (7/8);
let row2 = config.height/2;

// set aside keybinds
let keyA, keyD, keyW, keySPACE;