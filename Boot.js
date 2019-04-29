var GameName = {}

GameName.boot = function (game) {}

GameName.boot.prototype = {
    preload: function () {
        this.load.image('imageName', 'Images/imageNameType');
    },

    create: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_All;
        this.scale.minWidth = 800;
        this.scale.minHeight = 600;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // this.scale.forcePortrait = true;  // for mobile games
        this.scale.setScreenSize(true);

        this.input.addPointer();
        this.stage.backgroundColor = '#000000';

        this.state.start('Preloader');
    }
}