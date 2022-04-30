class Rock extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // adds object to the current scene
        scene.physics.add.existing(this);   // adds physics
        this.moveSpeed = gameSpeed;
    }

    update() {
        // move rock down the screen
        this.y += this.moveSpeed;

        if(this.y >= -50) {
            this.alpha += 0.01;
        }

        // destroy rock
        if(this.y >= game.config.height) {
            this.destroy();
        }
    }
}