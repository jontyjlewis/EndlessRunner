class Rock extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // adds object to the current scene
        this.moveSpeed = 3;
    }

    update() {

        // move rock down the screen
        this.y += this.moveSpeed;

        if(this.y >= -50) {
            this.alpha += 0.008;
        }


        // move rock to top of screen
        if(this.y >= game.config.height) {
            this.y = 0 - game.config.height;
            this.alpha = 0;
        }
    }
}