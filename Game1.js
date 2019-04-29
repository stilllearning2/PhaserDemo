GameName.Game1 = function (game) {
    // declare game variables
    this.totalgoodSprites;
    this.goodSpriteGroup;
    this.totalbadSprites;
    this.badSpriteGroup;
    this.gameover;
    this.countdown;
    this.overmessage;
    this.secondsElapsed;
    this.timer;
}

GameName.Game1.prototype = {

    create: function () {
        this.gameover = false;
        this.secondsElapsed = 0;
        this.timer = this.time.create(false);
        this.timer.loop(1000, updateSeconds, this);
        this.totalgoodSprites = 10;
        this.totalbadSprites = 0;
        this.buildWorld();
        this.buildgoodSprites();
        this.buildbadSprites();
        this.timer.Start();
    },

    buildWorld: function () {
        // add static background
        this.add.image();
        this.add.image();
        this.buildgoodSprites();
        this.buildbadSprites();
        this.countdown = this.add.bitmapText(x, y, font, "Sprites Left: " + this.totalgoodSprites, 16);
    },

    buildgoodSprites: function () {
        this.goodSpriteGroup = this.add.group();
        this.goodSpriteGroup.enableBody = true;
        for (let i = 0; i < this.totalgoodSprites; i++) {
            let gs = this.goodSpriteGroup.create(this.rnd.integerInRange(low x, hi x),
                this.rnd.integerInRange(low y, hi y), goodSprite);
            this.physics.enable(gs, Phaser.Physics.ARCADE);
            gs.anchor(0.5, 0.5);  // sets anchor in middle so body can be flipped on x or y axis
            gs.body.moves = true; // will use physics to move bunny

        }
    },

    buildbadSprites: function () {
        this.badSpriteGroup = this.add.group();
        this.badSpriteGroup.enableBody = true;
        for (let i = 0; i < this.totalbadSprites; i++) {
            let bs = this.badSpriteGroup.create(this.rnd.integerInRange(low x, hi x),
                this.rnd.integerInRange(low y, hi y), badSprite);
            let scale = this.rnd.integerInRange(0.5, 1.0);
            bs.scale.x = scale;
            bs.scale.y = scale;
            this.physics.enable(bs, Phaser.Physics.ARCADE);
            bs.anchor(0.5, 0.5);  // sets anchor in middle so body can be flipped on x or y axis
            bs.body.moves = true; // will use physics to move bunny

        }
    },

    collision: function () {
        if (gs.exists) {
            gs.kill();
            this.totalgoodSprites--;
            this.checkgoodSpritesLeft();
        }
    },

    checkgoodSpritesLeft: function () {
        if (this.totalgoodSprites <= 0) {
            this.gameover = true;
            this.countdown.setText('Sprites Left 0');
            this.overtext = this.add.bitmapText(x, y, font, text, font - size)
            this.overtext.align = "center";
            this.overtext.inputEnabled = true;
            this.overtext.events.onInputDown.addOnce(this.gameover, this);
            this.gameover(secondsElapsed);
        }
        else {
            this.countdown.setText('Sprites Left ' + totalgoodSprites);
        }
    },

    updateSeconds: function () {
        this.secondsElapsed++;
    },

    gameover: function (pointer) {
        gameover = true;
        this.state.start('Game1Outcome', {seconds: secondsElapsed});
    },

    update: function () {
        this.physics.arcade.overlap(this.goodSpriteGroup, this.badSpriteGroup, this.collsion, null)
    },
}