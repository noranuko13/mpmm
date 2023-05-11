import { Coord } from "../coord";

/**
 * ミャクのインターフェイス
 */
export interface IMyaku {
  /**
   * パスを描く
   * @param context - キャンバス要素の2Dコンテキスト
   */
  drawPath(context: CanvasRenderingContext2D): void;

  /**
   * 座標がミャクの範囲内かを判定する
   * @see Constants.MYAKU_SENSITIVITY
   * @param coord - 判定する座標
   * @returns 範囲内ならtrue,範囲外ならfalse
   */
  inRange(coord: Coord): boolean;

  /**
   * ミャクを指定の座標に移動させる
   * @param coord - 移動する座標
   */
  movePosition(coord: Coord): void;
}
