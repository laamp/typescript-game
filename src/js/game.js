var Game = /** @class */ (function () {
    function Game(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.status();
        this.start();
    }
    Game.prototype.status = function () {
        this.canvas && console.log('Canvas was found');
    };
    Game.prototype.start = function () {
        if (!this.context)
            throw new Error('Could not get context from canvas!');
        this.context.fillStyle = 'purple';
        this.context.fillRect(0, 0, 150, 75);
    };
    return Game;
}());
export default Game;
//# sourceMappingURL=game.js.map