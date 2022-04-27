console.log("hello from play.js");
class Play extends Phaser.Scene {
    constructor () {
        super("play");
    }

    preload() {
        // Player/Lizard
        this.load.spritesheet('lizard', './assets/new_lizard.png', {
            frameWidth: 150,
            frameHeight: 150,
            startFrame: 0,
            endFrame: 3
        });

        // Entities
        // branch
        this.load.image('branch', './assets/branch1.png');
        // snake
        this.load.spritesheet('snake', './assets/snake_sheet.png', {
            frameWidth: 420, 
            frameHeight: 150, 
            startFrame: 0, 
            endFrame: 3
        });
        // birb
        this.load.image('bird', './assets/bird.png');
        this.load.image('alert', './assets/alert.png');
        // dwayne johnson
        // this.load.spritesheet('rock', './assets/rock_mode.png', {
        //     frameWidth: 100,
        //     frameHeight: 95,
        //     startFrame: 0,
        //     endFrame: 3
        // });

        // Background & border
        this.load.image('background', './assets/Background/background1.png');
        this.load.image('border1', './assets/Background/border1.png');
        this.load.image('border2', './assets/Background/border2.png');
        this.load.image('border3', './assets/Background/border3.png');
    }

    create() {
        // background & border
        this.background = this.add.tileSprite(0, 0, 420, 600, 'background').setOrigin(0, 0);

        // Grid overlay
        // vertical
        // this.add.rectangle(game.config.width/3, 0, 2, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        // this.add.rectangle(game.config.width - game.config.width/3, 0, 2, game.config.height, 0xFFFFFF).setOrigin(0.5 ,0);
        // // horizontal
        // this.add.rectangle(0, game.config.height/4, game.config.width, 2, 0xFFFFFF).setOrigin(0 ,0);
        // this.add.rectangle(0, game.config.height/2, game.config.width, 2, 0xFFFFFF).setOrigin(0 ,0);
        // this.add.rectangle(0, game.config.height - game.config.height/4, game.config.width, 2, 0xFFFFFF).setOrigin(0 ,0);
        

        // -- PLAYER / LIZARD ----

        // Player Animation Controller
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('lizard', {start: 0, end: 3, first: 0}),
            frameRate: 6
        })
        // Player/Lizard
        this.p1Lizard = new Lizard(this, lane2, row0, 'lizard').setOrigin(0.5, 0);
        this.p1Lizard.setScale(0.7);
        this.p1Lizard.play({key: 'walk', repeat: -1});
        //this.p1Lizard.setScale(0.7);

        // Player/Lizard Keybinds
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // -- END OF PLAYER -----


        // -- ENEMIES --------------------------------------------------------------------

        // Enemy Spawn Timer
        this.spawnTimer = this.time.addEvent({
            delay: 3000,
            callback: this.spawn,
            callbackScope: this,
            loop: true
        });
        this.preOption = 2;

        // Branch
        // container of branches
        this.branches = [];
        // initial spawn/test
        this.makeBranch(lane1);
        this.makeBranch(lane3);

        // Bird
        this.birds = [];
        this.makeBird(lane1);
        this.makeBird(lane3);
        this.alert1 = this.add.sprite(lane1, rowAlert, 'alert').setOrigin(0.5, 0);
        // this.alert2 = this.add.sprite(lane2, rowAlert, 'alert').setOrigin(0.5, 0);
        // this.alert3 = this.add.sprite(lane3, rowAlert, 'alert').setOrigin(0.5, 0);
        // this.alert1.alpha = 0;
        // this.alert2.alpha = 0;
        // this.alert3.alpha = 0;
        // this.bird1 = new Bird(this, lane2, 0, 'bird').setOrigin(0.5, 0);
        // this.bird1.setScale(0.7);
        // this.alert1 = this.add.sprite(lane2, rowAlert, 'alert').setOrigin(0.5, 0);

        // this.bird2 = new Bird(this, lane3, 0, 'bird').setOrigin(0.5, 0);
        // this.bird2.setScale(0.7);
        // this.alert2 = this.add.sprite(lane3, rowAlert, 'alert').setOrigin(0.5, 0);


        // ---- SNAKE CONTROLLER & CURRENT SPAWN ----

        // snake animation controller
        this.anims.create( {
            key: 'slithering',
            frames: this.anims.generateFrameNumbers('snake', {start: 0, end: 3, first: 0}),
            frameRate: 4
        });

        // Snek
        this.snake1 = new Snake(this, -350, 0, 'snake', 0).setOrigin(0, 0);
        // animate
        this.snake1.play({key: 'slithering', repeat: -1});  // Repeat = -1 means loops indefinetely

        // ---- END OF SNAKE ----


        // ---- ROCK CONTROLLER & CURRENT SPAWN ----

        // // Rock Animation Controller
        // this.anims.create ({
        //     key: 'rockFall',
        //     frames: this.anims.generateFrameNumbers('rock', {start: 0, end: 3, first: 0}),
        //     frameRate: 0.6
        // });

        // // Rock
        // this.rock1 = new Rock(this, game.config.width/6, game.config.height, 'rock').setOrigin(0.5, 0);
        // this.rock2 = new Rock(this, game.config.width * (5/6), game.config.height + 400, 'rock').setOrigin(0.5, 0);
        // // animate (TEMP FIX, NEED TO SET ON TRIGGER)
        // this.rock1.play({key: 'rockFall', repeat: -1});
        // this.rock2.play({key: 'rockFall', repeat: -1});

        // ---- END OF ROCK ----

        // ---- END OF ENEMIES ---------------


        // ---- SCORE ----

        // top rectangle (score UI) (dark green)
        this.add.rectangle(0, 0, game.config.width, borderUISize*2 + borderpadding, 0x013220).setOrigin(0 ,0);

        // initialize score
        score = 0;

        // display score counter
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }

        this.add.text(game.config.width/4, borderpadding, 'SCORE: ', scoreConfig);
        this.scoreCounter = this.add.text(game.config.width/2,  borderpadding, score, scoreConfig);
        
        // increment score every second
        this.increaseScore = this.time.addEvent({
            delay: 1000,
            callback: this.scoreUP,
            callbackScope: this,
            loop: true
        });
        // -- END SCORE ----



        // border art
        this.border1 = this.add.tileSprite(0, 0, 420, 600, 'border1').setOrigin(0, 0);
        this.border2 = this.add.tileSprite(0, 0, 420, 600, 'border2').setOrigin(0, 0);
        this.border3 = this.add.tileSprite(0, 0, 420, 600, 'border3').setOrigin(0, 0);
    }

    update() {
        // background
        this.background.tilePositionY -= gameSpeed;
        this.border1.tilePositionY -= gameSpeed;
        this.border2.tilePositionY -= gameSpeed + 0.3;
        this.border3.tilePositionY -= gameSpeed + 0.5;

        this.p1Lizard.update();

        this.snake1.update();
        // this.rock1.update();
        // this.rock2.update();
        // this.bird1.update();
        // this.bird2.update();

        for (let i = 0; i < this.branches.length; i++) {
            this.branches[i].update();
            if (this.checkCollisionBranch(this.p1Lizard, this.branches[i])) {
                console.log("hit Branch");
            }
        }

        for (let i = 0; i < this.birds.length; i++) {
            this.birds[i].update();
            if(this.birds[i].y > game.config.height) {
                this.alert1.alpha = 1;
            }
            else {
                this.alert1.alpha = 0;
            }
            if (this.checkCollisionBird(this.p1Lizard, this.birds[i])) {
                console.log("hit Bird");
            }
        }

        // if(this.bird1.alert == true) {
        //     this.alert1.alpha = 1;
        // }
        // else {
        //     this.alert1.alpha = 0;
        // }

        // if(this.bird2.alert == true) {
        //     this.alert2.alpha = 1;
        // }
        // else {
        //     this.alert2.alpha = 0;
        // }

        // // jumping logic
        // if(Phaser.Input.Keyboard.JustDown(keySPACE) && 
        // this.p1Lizard.isJumping == false) {
        //     console.log('jumping!');
        //     this.p1Lizard.isJumping = true;
        //     this.p1Lizard.alpha = 0.5;
        //     this.time.delayedCall(1000, jump, null, this);
        // }
        if(Phaser.Input.Keyboard.JustDown(keyW) && 
        this.p1Lizard.y == row0) {
            //console.log('dash!');
            this.p1Lizard.isDash = true;
            this.time.delayedCall(700, reset, null, this);
        }

        // check collision w/ branch
        // if (this.checkCollisionBranch(this.p1Lizard, this.branch1)) {
        //     console.log('hit branch LEFT');
        // }
        // if (this.checkCollisionBranch(this.p1Lizard, this.branch2)) {
        //     console.log('hit branch RIGHT');
        // }
        // if (this.checkCollisionBranch(this.p1Lizard, this.branch3)) {
        //     console.log('hit branch MID');
        // }

        // check collision w/ snake
        if (this.checkCollisionSnake(this.p1Lizard, this.snake1)) {
            console.log('hit snake');
        }

        // // check collision w/ rock
        // if (this.checkCollisionRock(this.p1Lizard, this.rock1)) {
        //     //console.log('hit rock');
        // }
        // if (this.checkCollisionRock(this.p1Lizard, this.rock2)) {
        //     //console.log('hit rock');
        // }

        // // check collision w/ bird
        // if (this.checkCollisionBird(this.p1Lizard, this.bird1)) {
        //     //console.log('birb got u MID');
        // }
        // if (this.checkCollisionBird(this.p1Lizard, this.bird2)) {
        //     //console.log('birb got u RIGHT');
        // }
    }

    checkCollisionBranch(lizard, branch) {
        if(lizard.x === branch.x &&
            lizard.y === branch.y) {
                return true;
        }
        else {
                return false;
        }
    }

    checkCollisionSnake(lizard, snake) {
        if(lizard.y === snake.y && snake.attack) {
                return true;
        }
        else {
            return false;
        }
    }

    // checkCollisionRock(lizard, rock) {
    //     if(lizard.x === rock.x && 
    //         lizard.y === rock.y) {
    //             return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    checkCollisionBird(lizard, bird) {
        if(lizard.x < bird.x + bird.width/3 &&
            lizard.x + lizard.width/3 > bird.x &&
            lizard.y < bird.y + bird.height &&
            lizard.y + lizard.height/2 > bird.y) {
                return true;
        }
        else {
            return false;
        }
    }

    scoreUP() {
        // console.log("scoreUP");
        score += 10;
        this.scoreCounter.text = score;
    }

    spawn() {
        do {
            // option will be either 0, 1, 2, never repeating
            this.option = Math.floor(Math.random() * 3);
        } 
        while (this.option == this.preOption);  // will always pick a new pattern

        if(this.option == 0) {
            this.makeBranch(lane1);
            this.makeBird(lane3);
            this.preOption = 0;
        }
        else if(this.option == 1) {
            this.makeBranch(lane2);
            this.preOption = 1;
        }
        else if(this.option == 2) {
            this.makeBranch(lane3);
            this.makeBird(lane1);
            this.preOption = 2;
        }
    }

    // ---- ENEMY SPAWNING FUNCTIONS ----
    makeBranch(lane) {
        this.branches.push(new Branch(this, lane, -100, 'branch').setOrigin(0.5, 0));
    }
    makeBird(lane) {
        this.birds.push(new Bird(this, lane,  game.config.height + 400, 'bird').setOrigin(0.5, 0));
        // this.add.sprite(lane, rowAlert, 'alert').setOrigin(0.5, 0);
    }
}

function reset() {
    console.log('end dash');
    this.p1Lizard.isDash = false;
    //this.p1Lizard.y = game.config.height - borderUISize - borderpadding * 10;
}