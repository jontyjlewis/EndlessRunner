class Bird extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // adds object to the current scene
        this.moveSpeed = 9;
        this.birdActive = false;
        this.alert = false;
        this.setScale(0.7);
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
            this.warning();
        }
        else {
            this.alert = false;
        }
    }

    warning() {
        // console.log("bird incoming");
        this.alert = true;
    }
}