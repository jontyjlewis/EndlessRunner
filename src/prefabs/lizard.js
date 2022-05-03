// Lizard playable character prefab
class Lizard extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to the existing scene
        scene.physics.add.existing(this);   // adds physics
        this.moved = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.isDash = false;
        this.moveSpeed = 4;
        this.bottomOfScreen = game.config.height - borderUISize - borderpadding * 10;
        this.sfxMove = scene.sound.add('sfx_dash', {volume: 0.2});
        
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.moved = true;
            this.moveLeft = true;
            if(this.x === lane2) {
                this.x = lane1;
                this.sfxMove.play();
            } else if(this.x === lane3){
                this.x = lane2;
                this.sfxMove.play();
            }
        }
        else if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.moved = true;
            this.moveRight = true;
            if(this.x === lane2){ 
                this.x = lane3;
                this.sfxMove.play();
            } else if(this.x === lane1){ 
                this.x = lane2;
                this.sfxMove.play();
            }
         }

        if(this.isDash == true) {
            // this.sfxMove.play();
            this.y -= this.moveSpeed;
        }
        else if(this.y < this.bottomOfScreen) {
            this.y += this.moveSpeed;
        }
    }
}
