/*
  canvas进阶——如何画出平滑的曲线: https://juejin.im/post/5bc1a3f6f265da0ad947f4b1
*/
class Wave {
  private ctx: any
  private currentTime: number
  private t: number
  private step: number
  private a: number
  private stepsPreCicle: number
  private stepsPreSecond: number
  private d: number
  private w: number
  private h: number
  private delay: number
  constructor(ctx: any, w: number, h: number, delay: number = 0) {
    this.ctx = ctx;
    this.currentTime = Date.now();
    this.t = 0;
    this.step = w / 50;
    // 振幅
    this.a = 50;
    // 垂直位移
    this.d = 20;
    this.stepsPreSecond = 2;
    // 每个周期多少step
    this.stepsPreCicle = 5;
    // canvas容器宽高
    this.w = w;
    this.h = h;
    this.delay = delay;
  }
  caculate(x: number, delay: number = 0) {
    /*
      正弦余弦函数 https://www.shuxuele.com/algebra/amplitude-period-frequency-phase-shift.html
    */
    // const amplitude = this.a;
    const AngularV = (2 * Math.PI) / this.stepsPreCicle;
    const stepsPreSecond = this.stepsPreSecond;
    const amplitude = this.a;
    return amplitude * Math.sin( AngularV * (x + stepsPreSecond * this.t + delay) );
  }
  render() {
    this.t = (Date.now() - this.currentTime) / 1000;
    const ctx = this.ctx;
    const h = this.h;
    const w = this.w;
    ctx.save();
    ctx.beginPath();
    ctx.translate(0, h / 2);
    ctx.lineWidth = 1;
    ctx.moveTo(0, 0);
    let currentNode: any = null, nextNode: any = null;
    for (let i = this.step; i < w; i += this.step) {
      if (i === this.step) {
        currentNode = [i, this.caculate(i)];
        nextNode = [i + this.step, this.caculate(i + this.step)];
      } else {
        currentNode = nextNode;
        nextNode = [i + this.step, this.caculate(i + this.step)];
      }
      const computedNode = [(currentNode[0] + nextNode[0]) / 2, (currentNode[1] + nextNode[1]) / 2];
      ctx.quadraticCurveTo(currentNode[0], currentNode[1], computedNode[0], computedNode[1]);
    }
    ctx.lineTo(w, this.caculate(w));
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  render2() {
    this.t = (Date.now() - this.currentTime) / 1000;
    const ctx = this.ctx;
    const h = this.h;
    const w = this.w;
    ctx.save();
    ctx.beginPath();
    ctx.translate(0, h / 2);
    ctx.lineWidth = 1;
    ctx.moveTo(0, 0);
    let currentNode: any = null, nextNode: any = null;
    for (let i = this.step; i < w; i += this.step) {
      if (i === this.step) {
        currentNode = [i, this.caculate(i, this.stepsPreCicle / 2)];
        nextNode = [i + this.step, this.caculate(i + this.step, this.stepsPreCicle / 2)];
      } else {
        currentNode = nextNode;
        nextNode = [i + this.step, this.caculate(i + this.step, this.stepsPreCicle / 2)];
      }
      const computedNode = [(currentNode[0] + nextNode[0]) / 2, (currentNode[1] + nextNode[1]) / 2];
      ctx.quadraticCurveTo(currentNode[0], currentNode[1], computedNode[0], computedNode[1]);
    }
    ctx.lineTo(w, this.caculate(w, this.stepsPreCicle / 2));
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.fillStyle = 'rgba(193, 193, 193, 0.4)';
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  renderBoth() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.render();
    this.render2();
    requestAnimationFrame(this.renderBoth.bind(this));
  }

  animate() {
    this.renderBoth();
  }
}

export default Wave;
