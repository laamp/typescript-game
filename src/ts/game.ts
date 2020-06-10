class Game {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    this.status();
    this.start();
  }

  status(): void {
    this.canvas && console.log('Canvas was found');
  }

  start(): void {
    if (!this.context) throw new Error('Could not get context from canvas!');

    this.context.fillStyle = 'purple';
    this.context.fillRect(0, 0, 150, 75);
  }
}

export default Game;
