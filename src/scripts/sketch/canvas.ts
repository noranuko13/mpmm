import { MyakuList } from "./myaku-list/myaku-list";
import { Elems } from "../elems";
import { IMyaku } from "./myaku";
import { Coord } from "./coord";

/**
 * キャンバス
 */
export class Canvas {
  /**
   * ミャクのコレクションオブジェクト
   */
  private myakuList: MyakuList = new MyakuList();

  /**
   * 選択中のミャク
   */
  private selectedMyaku: IMyaku | null = null;

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
   * ミャクを掴む
   * @param myaku - 対象のミャク
   */
  grabMyaku(myaku: IMyaku) {
    this.selectedMyaku = myaku;
  }

  /**
   * ミャクを動かす
   * @param coord - 移動する座標
   */
  moveMyaku(coord: Coord) {
    if (!this.selectedMyaku) {
      return;
    }

    this.selectedMyaku.movePosition(coord);
  }

  /**
   * ミャクを放す
   */
  releaseMyaku() {
    this.selectedMyaku = null;
  }

  /**
   * ミャクを探して処理を行う
   * @param coord - 座標
   * @param func - 行う処理
   */
  seekMyaku(coord: Coord, func: (myaku: IMyaku) => void) {
    const iterator = this.myakuList.lifoIterator();
    while (iterator.hasNext()) {
      const myaku = iterator.getNext();
      if (myaku.inRange(coord)) {
        func(myaku);
        break;
      }
    }
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
