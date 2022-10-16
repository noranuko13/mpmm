import { Coord } from "./coord";
import { Random } from "../random";

/**
 * 図形パラメータ
 */
export class ShapeParams {
  /**
   * 座標
   */
  readonly coord: Coord;

  /**
   * X半径
   */
  readonly radiusX: number;

  /**
   * Y半径
   */
  readonly radiusY: number;

  constructor(coord: Coord, radiusX: number, radiusY: number) {
    this.coord = coord;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
  }

  /**
   * まるいミャクスポーン時のパラメーター
   * @param maxXRange - X座標 最大値
   * @param maxYRange - Y座標 最大値
   */
  static forArc(maxXRange: number, maxYRange: number) {
    const radius = Random.radius;
    return new ShapeParams(Coord.createRandom(maxXRange, maxYRange), radius, radius);
  }

  /**
   * まるーいミャクスポーン時のパラメーター
   * @param maxXRange - X座標 最大値
   * @param maxYRange - Y座標 最大値
   */
  static forEllipse(maxXRange: number, maxYRange: number) {
    const radiusXy = Random.radiusXy;
    return new ShapeParams(Coord.createRandom(maxXRange, maxYRange), radiusXy[0], radiusXy[1]);
  }
}
