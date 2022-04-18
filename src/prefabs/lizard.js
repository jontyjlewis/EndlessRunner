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
        if(Phaser.Input.Keyboard.JustDown(keyA)) {
            this.x -= 150;
        }
        else if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.x += 150;
        }

        // if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
        //     this.y += 200;
        // }
    }
}