export class Square {
  side: number;

  constructor(side: number = 0) {
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}
