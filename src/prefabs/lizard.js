// Lizard playable character prefab
class Lizard extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to the existing scene
        this.isJumping = false;          // jumping logic
        this.isDash = false;
        this.moveSpeed = 3;
        this.bottomOfScreen = game.config.height - borderUISize - borderpadding * 10;
    }

    update() {
        // horizontal movement
        if(Phaser.Input.Keyboard.JustDown(keyA) && 
        this.x > borderUISize + game.config.width/3 &&
        this.isJumping == false) {
            this.x -= game.config.width/3;
        }
        else if(Phaser.Input.Keyboard.JustDown(keyD) && 
        this.x < game.config.width - borderUISize - game.config.width/3 &&
        this.isJumping == false) {
            this.x += game.config.width/3;
        }

        if(this.isDash == true) {
            this.y -= this.moveSpeed;
        }
        else if(this.y < this.bottomOfScreen) {
            this.y += this.moveSpeed;
        }
        // Dash
        // if(Phaser.Input.Keyboard.JustDown(keyW)) {
        //     this.y -= 100;
        // }

        // Jump
        // if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
        //     console.log('jumping!');
        //     this.time.delayedCall(1000, jump, null, this);
        // }
        // else {
        //     console.log('not jumping');
        //     this.isJumping = false;
        // }
    }
    // jump() {
    //     console.log('not Jumping!');
    // }
    reset() {
        this.y = this.bottomOfScreen;
    }
}
// function jump() {
//     console.log('not jumping!');
// }