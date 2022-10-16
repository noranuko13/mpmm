/**
 * ミャクのインターフェイス
 */
export interface IMyaku {
  /**
   * パスを描く
   * @param context - キャンバス要素の2Dコンテキスト
   */
  drawPath(context: CanvasRenderingContext2D): void;
}
