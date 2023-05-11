import { MyakuList } from "./myaku-list";
import { IMyakuListIterator } from "./i-myaku-list-iterator";
import { IMyaku } from "../myaku";

/**
 * 先入れ先出しイテレータ
 * 描画するときの判定は、先に格納したミャクから
 */
export class FifoMyakuListIterator implements IMyakuListIterator {
  /**
   * ミャクのコレクションオブジェクト
   */
  private myakuList: MyakuList;

  /**
   * 次の要素のインデックス
   */
  private next: number;

  constructor(myakuList: MyakuList) {
    this.myakuList = myakuList;
    this.next = 0;
  }

  /**
   * 次の要素が存在するか
   * @returns 存在するときtrue,存在しないときfalse
   */
  hasNext(): boolean {
    return this.next < this.myakuList.length;
  }

  /**
   * 次の要素を取得する
   * @returns 次のミャク
   */
  getNext(): IMyaku {
    const myaku = this.myakuList.get(this.next);
    this.next++;
    return myaku;
  }
}
