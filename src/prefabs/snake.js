class Snake extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // adds object to the current scene
        scene.physics.add.existing(this);   // adds physics
        this.body.setSize(420,90);
        this.moveSpeed = gameSpeed;
        this.attack = false;
        this.flipped = false;
        this.sfxPlay = false;
        this.sfxAttack = scene.sound.add('sfx_snake');
    }

    update() {
        // move snake down the screen
        this.y += this.moveSpeed;

        if(this.x > game.config.width/2 && this.attack == false) {
            this.flipX = true;
        }

        if(this.flipped == false) {
            // snake attacks
            if(this.y >= game.config.height -125) {
                this.attack = true;
                this.x = 0;
                if(this.sfxPlay == false) {
                    this.sfxPlay = true;
                    this.sfxAttack.play();
                }
            }
        } else if(this.flipped == true) {
            this.flipX = true;
            // snake attacks
            if(this.y >= game.config.height -125) {
                this.attack = true;
                this.x = -600;
                if(this.sfxPlay == false) {
                    this.sfxPlay = true;
                    this.sfxAttack.play();
                }
            }
        }

        // destroy snake
        if(this.y > game.config.height + 100) {
            this.destroy();
        }
    }
}