import { ShapeParams } from "../shape-params";
import { StyleParams } from "../style-params";
import { Constants } from "../../constants";
import { IMyaku } from "./i-myaku";
import { EllipseShape, IShape } from "../shape";
import { Coord } from "../coord";

/**
 * 目玉の楕円
 * ミャクミャク様の目玉
 */
export class EyeMyaku implements IMyaku {
  protected shapeParams: ShapeParams;
  protected styleParams: StyleParams;
  protected baseShape: IShape;

  constructor(shapeParams: ShapeParams, styleParams: StyleParams) {
    this.shapeParams = shapeParams;
    this.styleParams = styleParams;
    this.baseShape = new EllipseShape(this.shapeParams, this.styleParams);
  }

  drawPath(context: CanvasRenderingContext2D) {
    // 身体
    this.baseShape.drawPath(context);

    const unitX = this.shapeParams.radiusX / 50;
    const unitY = this.shapeParams.radiusY / 50;
    const unitEye = this.shapeParams.radiusX < this.shapeParams.radiusY ? unitX : unitY;

    // 白目
    const whiteCoord = this.shapeParams.coord.findByHypAngle(unitX * 18, this.styleParams.whiteAngle);
    const whiteXy = unitEye * 24;
    const whiteArc = new EllipseShape(
      new ShapeParams(whiteCoord, whiteXy, whiteXy, 0),
      new StyleParams(Constants.MYAKU_WHITE)
    );
    whiteArc.drawPath(context);

    // 虹彩
    const irisCoord = whiteCoord.findByHypAngle(unitEye * 10, this.styleParams.irisAngle);
    const irisXy = unitEye * 10;
    const irisArc = new EllipseShape(new ShapeParams(irisCoord, irisXy, irisXy, 0), StyleParams.createBlue());
    irisArc.drawPath(context);
  }

  inRange(coord: Coord) {
    return this.baseShape.inRange(coord);
  }

  movePosition(coord: Coord) {
    this.shapeParams.coord = coord;
  }
}
