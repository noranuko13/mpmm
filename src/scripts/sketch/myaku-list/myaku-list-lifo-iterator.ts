import { MyakuList } from "./myaku-list";
import { IMyakuListIterator } from "./i-myaku-list-iterator";
import { IMyaku } from "../myaku";

/**
 * 後入れ先出しイテレータ
 * 掴む・消すときの判定は、後に格納したミャクから
 */
export class LifoMyakuListIterator implements IMyakuListIterator {
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
    this.next = this.myakuList.length;
  }

  /**
   * 次の要素が存在するか
   * @returns 存在するときtrue,存在しないときfalse
   */
  hasNext(): boolean {
    return 0 < this.next;
  }

  /**
   * 次の要素を取得する
   * @returns 次のミャク
   */
  getNext(): IMyaku {
    this.next--;
    return this.myakuList.get(this.next);
  }
}
