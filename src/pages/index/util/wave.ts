class Wave {
  private ctx: any
  private t: number
  private step: number
  private color: string
  private speed: number
  private a: number
  private f: number
  private d: number
  private w: number
  private h: number
  constructor(ctx: any, color: string, w: number, h: number, t: number = 0) {
    this.ctx = ctx;
    this.t = t;
    this.step = w / 300;
    this.color = color;
    this.speed = 0.1;
    this.a = 30;
    this.f = 20;
    this.d = 20;
    this.w = w;
    this.h = h;
  }
  caculate(x: number) {
    const amplitude = this.a;
    const displacement = this.d;
    // A*sin(Bx + C) + D    
    return amplitude * Math.sin(0.05 * x + this.t) + displacement;
  }
  render() {
    this.t += this.speed;
    const ctx = this.ctx;
    const h = this.h;
    const w = this.w;
    ctx.save();
    ctx.beginPath();
    ctx.translate(0, h / 2);
    ctx.lineWidth = 1;
    ctx.moveTo(0, 0);
    for (let i = this.step; i < w; i += this.step) {
      ctx.lineTo(i, this.caculate(i));
    }
    ctx.lineTo(w, this.caculate(w));
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  animate() {
    requestAnimationFrame(this.render.bind(this));
  }
}

export default Wave;
