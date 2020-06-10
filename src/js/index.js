import Game from './game';
window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.querySelector('#game');
    if (!canvas)
        throw new Error('Unable to find HTML Canvas!');
    var game = new Game(canvas);
});
//# sourceMappingURL=index.js.map