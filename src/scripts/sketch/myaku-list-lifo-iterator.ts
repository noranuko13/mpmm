import { MyakuList } from "./myaku-list";
import { IMyakuListIterator } from "./i-myaku-list-iterator";
import { IMyaku } from "./i-myaku";

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

  hasNext(): boolean {
    return 0 < this.next;
  }

  getNext(): IMyaku {
    this.next--;
    return this.myakuList.get(this.next);
  }
}
