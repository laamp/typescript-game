import Game from './game';

window.addEventListener('DOMContentLoaded', (): void => {
  const canvas: HTMLCanvasElement | null = document.querySelector('#game');

  if (!canvas) return;
  const game = new Game(canvas);
  game.status();
});
