import { ShapeParams } from "../shape-params";
import { StyleParams } from "../style-params";
import { IMyaku } from "./i-myaku";
import { Coord } from "../coord";
import { EllipseShape, IShape } from "../shape";

/**
 * ミャク
 */
export class Myaku implements IMyaku {
  protected shapeParams: ShapeParams;
  protected baseShape: IShape;

  constructor(shapeParams: ShapeParams, styleParams: StyleParams) {
    this.shapeParams = shapeParams;
    this.baseShape = new EllipseShape(this.shapeParams, styleParams);
  }

  drawPath(context: CanvasRenderingContext2D) {
    this.baseShape.drawPath(context);
  }

  inRange(coord: Coord) {
    return this.baseShape.inRange(coord);
  }

  movePosition(coord: Coord) {
    this.shapeParams.coord = coord;
  }
}
