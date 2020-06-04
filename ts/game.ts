export default class Game {
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  status() {
    console.log('Canvas is', this.canvas);
  }
}
