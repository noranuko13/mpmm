import { Constants } from "../constants";

/**
 * 座標
 */
export class Coord {
  /**
   * X座標
   */
  readonly x: number;

  /**
   * Y座標
   */
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * ランダムな座標を取得する
   * @param maxXRange - X座標 最大値
   * @param maxYRange - Y座標 最大値
   * @returns 座標
   */
  static createRandom(maxXRange: number, maxYRange: number): Coord {
    const offset = Constants.SKEB_OFFSET;
    const randomNumber = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return new Coord(randomNumber(offset, maxXRange - offset), randomNumber(offset, maxYRange - offset));
  }

  /**
   * 斜辺と角度から座標を求める
   * @param hyp - 斜辺
   * @param angle - 角度
   * @returns 座標
   */
  findByHypAngle(hyp: number, angle: number): Coord {
    const x = (angle * Math.PI) / 180;
    return new Coord(this.x + hyp * Math.cos(x), this.y + hyp * Math.sin(x));
  }
}
