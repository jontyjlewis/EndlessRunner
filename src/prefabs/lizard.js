// Lizard playable character prefab
class Lizard extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);
        this.moveSpeed = 5;
    }

    update() {
        // horizontal movement
        if(keyA.isDown) {
            this.x -= this.moveSpeed;
        }
        else if(keyD.isDown) {
            this.x += this.moveSpeed;
        }
    }
}