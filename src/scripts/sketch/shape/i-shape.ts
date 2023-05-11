import { Coord } from "../coord";

/**
 * 図形のインターフェイス
 */
export interface IShape {
  /**
   * パスを描く
   * @param context - キャンバス要素の2Dコンテキスト
   */
  drawPath(context: CanvasRenderingContext2D): void;

  /**
   * 座標が図形の範囲内かを判定する
   * @see Constants.SHAPE_SENSITIVITY
   * @param coord - 判定する座標
   * @returns 範囲内ならtrue,範囲外ならfalse
   */
  inRange(coord: Coord): boolean;
}
