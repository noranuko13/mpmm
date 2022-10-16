import { Coord } from "./coord";

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
}
