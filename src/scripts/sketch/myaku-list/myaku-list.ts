import { MyakuListFifoIterator } from "./myaku-list-fifo-iterator";
import { LifoMyakuListIterator } from "./myaku-list-lifo-iterator";
import { IMyaku } from "../myaku";

/**
 * ミャクのコレクションオブジェクト
 */
export class MyakuList {
  /**
   * ミャクの配列
   */
  private myakus: IMyaku[];

  /**
   * 次の要素のインデックス
   */
  private next: number;

  constructor() {
    this.myakus = [];
    this.next = 0;
  }

  /**
   * ミャク配列の長さ
   * @returns ミャク配列の長さ
   */
  get length(): number {
    return this.next;
  }

  /**
   * ミャクを取得する
   * @param index インデックス
   * @returns ミャク
   */
  get(index: number): IMyaku {
    return this.myakus[index];
  }

  /**
   * ミャクを後ろから追加する
   * @param myaku ミャク
   */
  append(myaku: IMyaku) {
    this.myakus[this.next] = myaku;
    this.next++;
  }

  /**
   * ミャクを取り除く
   * @param myaku ミャク
   */
  remove(myaku: IMyaku) {
    this.myakus = this.myakus.filter((s) => {
      return myaku !== s;
    });
    this.next--;
  }

  /**
   * FIFOイテレーターを取得する
   * @returns FIFOイテレーター
   */
  fifoIterator(): MyakuListFifoIterator {
    return new MyakuListFifoIterator(this);
  }

  /**
   * LIFOイテレーターを取得する
   * @returns LIFOイテレーター
   */
  lifoIterator(): LifoMyakuListIterator {
    return new LifoMyakuListIterator(this);
  }
}
