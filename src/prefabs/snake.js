class Snake extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // adds object to the current scene
        this.moveSpeed = gameSpeed;
        this.attack = false;
        this.flipped = false;
    }

    update() {
        // move snake down the screen
        this.y += this.moveSpeed;

        // // move snake to top of screen
        // if(this.y >= game.config.height) {
        //     this.y = 0 - game.config.height;
        //     this.x = -350;
        //     this.attack = false;
        // }
        if(this.x > game.config.width/2 && this.attack == false) {
            this.flipX = true;
        }

        if(this.flipped == false) {
            // snake attacks
            if(this.y >= game.config.height -125) {
                this.attack = true;
                this.x = 0;
            }
        } else if(this.flipped == true) {
            this.flipX = true;
            // snake attacks
            if(this.y >= game.config.height -125) {
                this.attack = true;
                this.x = -600;
            }
        }
        

        // destroy snake
        if(this.y > game.config.height + 100) {
            this.destroy();
        }
    }
}