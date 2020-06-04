"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __importDefault(require("./game"));
window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.querySelector('#game');
    if (!canvas)
        return;
    var game = new game_1.default(canvas);
    game.status();
});
//# sourceMappingURL=index.js.map