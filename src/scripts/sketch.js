"use strict";

/**
 * 座標
 */
class Coord {
  /**
   * @type {number} X座標
   */
  #x;

  /**
   * @type {number} Y座標
   */
  #y;

  /**
   * @param {number} x X座標
   * @param {number} y Y座標
   */
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  /**
   * @return {number} X座標
   */
  get x() {
    return this.#x;
  }

  /**
   * @return {number} Y座標
   */
  get y() {
    return this.#y;
  }

  /**
   * ランダムな座標を取得する
   * @param {number} offset 余白
   * @return {Coord}
   */
  static createRandom(offset = Constants.SKEB_OFFSET) {
    return new Coord(
      this.#randomFromTo(offset, Elems.canvas.width - offset),
      this.#randomFromTo(offset, Elems.canvas.height - offset)
    );
  }

  /**
   * マウスイベントから座標を生成する
   * @param {MouseEvent} event
   * @return {Coord}
   */
  static createByMouse(event) {
    return new Coord(event.pageX - Elems.canvas.offsetLeft, event.pageY - Elems.canvas.offsetTop);
  }

  /**
   * 最小値と最大値の間の乱数を取得する
   * @param {number} min 最小値
   * @param {number} max 最大値
   * @returns {number} 乱数
   */
  static #randomFromTo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * 斜辺と角度から座標を求める
   * @param {number} hyp 斜辺
   * @param {number} angle 角度
   */
  findByHypAngle(hyp, angle) {
    const x = (angle * Math.PI) / 180;
    return new Coord(this.#x + hyp * Math.cos(x), this.#y + hyp * Math.sin(x));
  }
}

/**
 * スケッチ
 */
class Sketch {
  /**
   * @type {MyakuList}
   */
  #myakuList;

  /**
   * @type {IMyaku}
   */
  #selectedShape;

  constructor() {
    this.releaseShape();
    this.clearMyakuList();
  }

  /**
   * 描画領域のサイズを変更する
   * @param {number} width キャンバスの幅
   * @param {number} height キャンバスの高さ
   */
  static resizeCanvas(width, height) {
    Elems.canvas.width = width;
    Elems.canvas.height = height;
  }

  /**
   * 描画領域のサイズを変更する
   * @param {number} pcWidth 幅パーセント
   * @param {number} pcHeight 高さパーセント
   */
  static resizeCanvasByPercent(pcWidth, pcHeight) {
    Elems.canvas.width = (Elems.sketch.clientWidth * pcWidth) / 100 - 2;
    Elems.canvas.height = (Elems.body.clientHeight * pcHeight) / 100 - 2;
  }

  /**
   * ミャクリストをクリアする
   */
  clearMyakuList() {
    this.#myakuList = new MyakuList([]);
  }

  /**
   * ミャクを掴む
   * @param {IMyaku} myaku
   */
  grabShape(myaku) {
    this.#selectedShape = myaku;
  }

  /**
   * ミャクを動かす
   */
  moveShape(coord) {
    if (!this.#selectedShape) {
      return;
    }
    this.#selectedShape.coord = coord;
  }

  /**
   * ミャクを放す
   */
  releaseShape() {
    this.#selectedShape = null;
  }

  /**
   * ミャクを消す
   * @param {IMyaku} myaku
   */
  eraseShape(myaku) {
    this.#myakuList.remove(myaku);
  }

  /**
   * ミャクを末尾に追加する
   * @param {IMyaku} myaku
   */
  appendShape(myaku) {
    this.#myakuList.append(myaku);
  }

  /**
   * 再描画する
   */
  redraw() {
    this.gesso();
    const iterator = this.#myakuList.fifoIterator();
    while (iterator.hasNext()) {
      iterator.next().drawPath(Elems.context);
    }
  }

  /**
   * 下地剤を塗る
   */
  gesso() {
    Elems.context.clearRect(0, 0, Elems.canvas.width, Elems.canvas.height);
  }

  /**
   * キャプチャを取得する
   */
  capture() {
    Download.createAnchor().click();
  }

  /**
   * ミャクを探して処理を行う
   * @param {Coord} coord
   * @param {Function} func
   */
  seekShape(coord, func) {
    const iterator = this.#myakuList.lifoIterator();
    while (iterator.hasNext()) {
      const myaku = iterator.next();
      if (myaku.inRange(coord)) {
        func(myaku);
        break;
      }
    }
  }
}
