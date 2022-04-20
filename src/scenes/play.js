console.log("hello from play.js");
class Play extends Phaser.Scene {
    constructor () {
        super("play");
    }

    preload() {
        // Player
        this.load.image('lizard', './assets/lizard.png');

        // Entities
        // branch
        this.load.image('branch', './assets/branch.png');
        // snake
        // birb
        // dwayne johnson

        // Background
        this.load.image('background', './assets/Background/background.png');
    }

    create() {
        // background
        this.background = this.add.tileSprite(0, 0, 420, 600, 'background').setOrigin(0, 0);

        // Grid overlay
        // vertical
        this.add.rectangle(game.config.width/3, 0, 2, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - game.config.width/3, 0, 2, game.config.height, 0xFFFFFF).setOrigin(0.5 ,0);
        // horizontal
        this.add.rectangle(0, game.config.height/4, game.config.width, 2, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height/2, game.config.width, 2, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - game.config.height/4, game.config.width, 2, 0xFFFFFF).setOrigin(0 ,0);
        
        this.add.rectangle(0, 0, game.config.width, borderUISize*2 + borderpadding, 0x0000FF).setOrigin(0 ,0);

    
        // Borders
        // this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUISize - borderpadding, game.config.width, borderUISize + borderpadding, 0xFF0000).setOrigin(0 ,0);
	    this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);


        // Player
        this.p1Lizard = new Lizard(this, game.config.width/2, game.config.height - borderUISize - borderpadding*2, 'lizard').setOrigin(0.5, 1);

        // Player/Lizard Keybinds
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Entities
        // branch
        this.branch1 = new Branch(this, game.config.width/4 - borderUISize, game.config.height, 'branch').setOrigin(0.5, 0);

        
    }

    update() {
        // background
        this.background.tilePositionY -= 5;

        this.p1Lizard.update();
        this.branch1.update();
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            console.log('jumping!');
            this.p1Lizard.isJumping = true;
            this.time.delayedCall(1000, jump, null, this);
        }

        // check collision w/ branch
        if (this.checkCollisionBranch(this.p1Lizard, this.branch1)) {
            console.log('hit branch');
        }
    }

    checkCollisionBranch(lizard, branch) {
        if((lizard.x < branch.x + branch.width &&
            lizard.x + lizard.width > branch.x &&
            lizard.y < branch.y + branch.height &&
            lizard.y + lizard.height > branch.y) &&
            this.p1Lizard.isJumping == false) {
                return true;
            }
            else {
                return false;
            }
    }
}
function jump() {
    console.log('not jumping!');
    this.p1Lizard.isJumping = false;
}