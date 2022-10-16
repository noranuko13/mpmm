import { ShapeParams } from "./shape-params";
import { StyleParams } from "./style-params";
import { IMyaku } from "./i-myaku";

/**
 * ミャク
 */
export class Myaku implements IMyaku {
  protected shapeParams: ShapeParams;

  protected styleParams: StyleParams;

  constructor(shapeParams: ShapeParams, styleParams: StyleParams) {
    this.shapeParams = shapeParams;
    this.styleParams = styleParams;
  }

  drawPath(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.ellipse(
      this.shapeParams.coord.x,
      this.shapeParams.coord.y,
      this.shapeParams.radiusX,
      this.shapeParams.radiusY,
      this.shapeParams.bodyRadian,
      0,
      Math.PI * 2
    );
    context.fillStyle = this.styleParams.bodyColor;
    context.fill();
  }
}
