class Branch extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // adds object to the current scene
        scene.physics.add.existing(this);   // add physics
        this.body.setSize(140,60);
        this.setDepth(-1);
        this.moveSpeed = gameSpeed;
    }

    update() {
        this.moveSpeed = gameSpeed;
        // move branch down the screen
        this.y += this.moveSpeed;

        // move branch to top of screen
        if(this.y > game.config.height) {
            this.destroy();
        }
    }
}