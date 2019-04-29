GameName.StartMenu = function (game) {
    // declarations
    this.startBackGround;
    this.startPrompt;
}

GameName.StartMenu = {

    create: function () {
        // implementations
        startBackGround = this.add.image(0, 0, 'titlescreen')
        startBackGround.inputEnabled = true;
        startBackGround.events.onInputDown.addOnce(this.startGame, this);

        startPrompt = this.add.bitmapText(this.world.centerX, this.world.centerY, 'fontName',
            'titletext', 16) // font size
    },

    startGame: function (pointer) {
        this.state.start("Game1");
    }
}