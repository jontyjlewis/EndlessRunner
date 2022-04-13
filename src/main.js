// console.log("Hello from main.js");

let config = {
    type: Phaser.AUTO,
    scene: [Menu],
    scale: {
        width: 500,
        height: 700,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
    }
};

let game = new Phaser.Game(config);