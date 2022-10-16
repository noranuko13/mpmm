import { MyakuList } from "./myaku-list";
import { Elems } from "../elems";
import { IMyaku } from "./i-myaku";

/**
 * キャンバス
 */
export class Canvas {
  /**
   * ミャクのコレクションオブジェクト
   */
  private myakuList: MyakuList = new MyakuList();

  private elems: Elems;

  constructor(elems: Elems) {
    this.elems = elems;
    this.changeFabric();
  }

  /**
   * ミャクを乗せる
   * @param myaku
   */
  putOnMyaku(myaku: IMyaku) {
    this.myakuList.append(myaku);
  }

  /**
   * ミャクを消す
   * @param {IMyaku} myaku
   */
  eraseMyaku(myaku: IMyaku) {
    this.myakuList.remove(myaku);
  }

  /**
   * 再描画する
   */
  redraw() {
    this.paintGesso();
    const iterator = this.myakuList.fifoIterator();
    while (iterator.hasNext()) {
      iterator.getNext().drawPath(this.elems.context);
    }
  }

  /**
   * キャンバスを張り替える
   */
  changeFabric() {
    this.myakuList = new MyakuList();
    this.paintGesso();
  }

  /**
   * 下地剤を塗る
   */
  private paintGesso() {
    this.elems.context.clearRect(0, 0, this.elems.canvas.width, this.elems.canvas.height);
  }
}
