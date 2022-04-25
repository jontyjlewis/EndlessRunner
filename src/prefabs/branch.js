class Branch extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // adds object to the current scene
        this.moveSpeed = gameSpeed;
    }

    update() {

        // move branch down the screen
        this.y += this.moveSpeed;

        // move branch to top of screen
        if(this.y >= game.config.height) {
            this.y = 0 - game.config.height;
        }
    }
}