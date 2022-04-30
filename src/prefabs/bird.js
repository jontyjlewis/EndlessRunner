class Bird extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // adds object to the current scene
        scene.physics.add.existing(this);   // adds physics
        this.moveSpeed = 9;
        this.birdActive = false;
        this.alert = false;
        this.setScale(0.7);
        this.sfxPlay = false;
        this.sfxAttack = scene.sound.add('sfx_bird');
    }

    update() {
        // move bird up the screen
        this.y -= this.moveSpeed;

        // destroy bird off screen
        if(this.y < -400) {
            this.destroy();
        }

        if(this.x > 0 && this.x < config.height){
            this.birdActive = true;
        } else{ 
            this.birdActive = false;
        } 

        if(this.y > game.config.height) {
            this.alert = true;
        }
        else {
            this.alert = false;
        }

        if(this.birdActive && !this.sfxPlay) {
            this.sfxPlay = true;
            this.sfxAttack.play();
        }
    }
}