/**
 * ミャクイテレータのインターフェイス
 */
import { IMyaku } from "../i-myaku";

export interface IMyakuListIterator {
  /**
   * 次の要素が存在するか
   * @returns 存在するときtrue,存在しないときfalse
   */
  hasNext(): boolean;

  /**
   * 次の要素を取得する
   * @returns 次のミャク
   */
  getNext(): IMyaku;
}
