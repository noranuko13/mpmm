import { ShapeParams } from "../shape-params";
import { StyleParams } from "../style-params";
import { Coord } from "../coord";
import { IShape } from "./i-shape";
import { Constants } from "../../constants";

/**
 * 楕円 図形
 */
export class EllipseShape implements IShape {
  protected shapeParams: ShapeParams;

  protected styleParams: StyleParams;

  constructor(shapeParams: ShapeParams, styleParams: StyleParams) {
    this.shapeParams = shapeParams;
    this.styleParams = styleParams;
  }

  drawPath(context: CanvasRenderingContext2D): void {
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

  inRange(coord: Coord): boolean {
    // 中心座標 shapeParams.coord, 半径 radiusX, radiusY, 回転角 whiteAngle の楕円の中に、
    // 点 coord が存在するかどうかを判定する

    // まず楕円の中心を原点へ。このとき点も一緒に移動させる。
    const pointX = coord.x - this.shapeParams.coord.x;
    const pointY = coord.y - this.shapeParams.coord.y;

    // 次に楕円を回転させる前に戻す。このとき点も一緒に移動させる。※時計回り。
    //   x =   cos θ * x + sin θ * y
    //   y = - sin θ * x + cos θ * y
    const sinAngle = Math.sin(this.shapeParams.bodyRadian);
    const cosAngle = Math.cos(this.shapeParams.bodyRadian);
    const rotatedPointX = cosAngle * pointX + sinAngle * pointY;
    const rotatedPointY = -sinAngle * pointX + cosAngle * pointY;

    // 楕円の方程式から、移動後の点が楕円に含まれるかを判定する。
    //   x^2 / a^2 + y^2 / b^2 = 1
    const result =
      Math.pow(rotatedPointX, 2) / Math.pow(this.shapeParams.radiusX, 2) +
      Math.pow(rotatedPointY, 2) / Math.pow(this.shapeParams.radiusY, 2);
    return result <= Constants.SHAPE_SENSITIVITY;
  }
}
