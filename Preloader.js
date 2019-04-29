GameName.Preloader = function (game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
}

GameName.Preloader.prototype = {

    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.preload.setPreloadSprite(this.preloadBar);

        this.titleText = this.add.image(this.world.centerX, this.world.centerY, 'titleImage');
        this.titleText.anchor.setTo(0.5, 0.5);

        // preload objects for all game states
        this.load.image('imageName', 'Images/imageName_Type'); // start menu background
        this.load.bitmapFont('fontname', 'fonts/png file', 'fonts/fnt file');
    },

    create: function () {
        this.preloadBar.cropEnabled = false;
    },

    update: function () {
        this.ready = true;
        this.state.start('StartMenu');

    }
}
