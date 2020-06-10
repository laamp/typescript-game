import Game from './game';

window.addEventListener('DOMContentLoaded', (): void => {
  const canvas: HTMLCanvasElement | null = document.querySelector('#game');
  if (!canvas) throw new Error('Unable to find HTML Canvas!');
  const game = new Game(canvas);
});
