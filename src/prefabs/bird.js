class Bird extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // adds object to the current scene
    }

    update() {
        // move rock down the screen
        this.y += this.moveSpeed;

        // move rock to top of screen
        if(this.y >= game.config.height) {
            this.y = 0 - game.config.height;
        }
    }
}