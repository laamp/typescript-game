"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game(canvas) {
        this.canvas = canvas;
    }
    Game.prototype.status = function () {
        console.log('Canvas is', this.canvas);
    };
    return Game;
}());
exports.default = Game;
//# sourceMappingURL=game.js.map