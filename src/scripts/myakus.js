"use strict";

/**
 * ミャクのインターフェイス
 */
class IMyaku {
  /**
   * @type {Coord} 座標
   */
  coord;

  /**
   * 座標がミャクの範囲内かを判定する
   * @param {Coord} coord
   * @return {boolean}
   */
  inRange(coord) {
    return false;
  }

  /**
   * パスを描く
   * @param {RenderingContext} context
   */
  drawPath(context) {}
}

/**
 * ミャクコレクションオブジェクト
 */
class MyakuList {
  /** @type {IMyaku[]} ミャクの配列 */
  #myakus;

  /**
   * @param {IMyaku[]} myakus
   */
  constructor(myakus) {
    this.#myakus = myakus;
    this.next = 0;
  }

  get length() {
    return this.next;
  }

  /**
   * @param index
   * @return {IMyaku}
   */
  get(index) {
    return this.#myakus[index];
  }

  append(myaku) {
    this.#myakus[this.next] = myaku;
    this.next++;
  }

  remove(myaku) {
    this.#myakus = this.#myakus.filter((s) => {
      return myaku !== s;
    });
    this.next--;
  }

  fifoIterator() {
    return new FifoMyakuListIterator(this);
  }

  lifoIterator() {
    return new LifoMyakuListIterator(this);
  }
}

/**
 * ミャクイテレータのインターフェイス
 */
class IMyakuListIterator {
  hasNext() {
    return false;
  }

  next() {}
}

/**
 * 先入れ先出しイテレータ
 * 描画するときの判定は、先に格納したミャクから
 */
class FifoMyakuListIterator extends IMyakuListIterator {
  /** @type {MyakuList} */
  #myakuList;
  /** @type {number} */
  #index;

  /**
   * @param {MyakuList} myakuList
   */
  constructor(myakuList) {
    super();
    this.#myakuList = myakuList;
    this.#index = 0;
  }

  hasNext() {
    return this.#index < this.#myakuList.length;
  }

  /**
   * @return {IMyaku}
   */
  next() {
    const myaku = this.#myakuList.get(this.#index);
    this.#index++;
    return myaku;
  }
}

/**
 * 後入れ先出しイテレータ
 * 掴む・消すときの判定は、後に格納したミャクから
 */
class LifoMyakuListIterator extends IMyakuListIterator {
  /** @type {MyakuList} */
  #myakuList;
  /** @type {number} */
  #index;

  /**
   * @param {MyakuList} myakuList
   */
  constructor(myakuList) {
    super();
    this.#myakuList = myakuList;
    this.#index = this.#myakuList.length;
  }

  hasNext() {
    return 0 < this.#index;
  }

  /**
   * @return {IMyaku}
   */
  next() {
    this.#index--;
    return this.#myakuList.get(this.#index);
  }
}

/**
 * ミャクのベース
 */
class Myaku extends IMyaku {
  /**
   * @param {ShapeParams} shapeParams
   * @param {TypeParams} typeParams
   */
  constructor(shapeParams, typeParams) {
    super();
    this.coord = shapeParams.coord;
    this.radiusX = shapeParams.radiusX;
    this.radiusY = shapeParams.radiusY;
    this.whiteAngle = shapeParams.whiteAngle;
    this.bodyColor = typeParams.bodyColor;
  }

  drawPath(context) {
    context.beginPath();
    context.ellipse(this.coord.x, this.coord.y, this.radiusX, this.radiusY, (this.whiteAngle * Math.PI) / 180, 0, Math.PI * 2);
    context.fillStyle = this.bodyColor;
    context.fill();
  }

  inRange(coord) {
    // 中心座標 this.coord, 半径 radiusX, radiusY, 回転角 this.whiteAngle の楕円の中に、
    // 点 coord が存在するかどうかを判定する

    // まず楕円の中心を原点へ。このとき点も一緒に移動させる。
    const pointX = coord.x - this.coord.x;
    const pointY = coord.y - this.coord.y;
    // 次に楕円を回転させる前に戻す。このとき点も一緒に移動させる。※時計回り。
    //   x =   cos θ * x + sin θ * y
    //   y = - sin θ * x + cos θ * y
    const sinAngle = Math.sin((this.whiteAngle * Math.PI) / 180);
    const cosAngle = Math.cos((this.whiteAngle * Math.PI) / 180);
    const rotatedPointX = cosAngle * pointX + sinAngle * pointY;
    const rotatedPointY = -sinAngle * pointX + cosAngle * pointY;
    // この状態におけるミャクは以下(表示できないので中心座標に100を足している)。
    // sketch.redraw()すると消えてしまうのでコメントアウトする必要あり。
    // const offset = 100;
    // Elems.context.beginPath();
    // Elems.context.ellipse(offset, offset, this.radiusX, this.radiusY, 0, 0, Math.PI * 2);
    // Elems.context.stroke();
    // Elems.context.beginPath();
    // Elems.context.arc(rotatedPointX + offset, rotatedPointY + offset, 2, 0, Math.PI*2, true);
    // Elems.context.stroke();
    // 楕円の方程式から、移動後の点が楕円に含まれるかを判定する。
    //   x^2 / a^2 + y^2 / b^2 = 1
    const result =
      Math.pow(rotatedPointX, 2) / Math.pow(this.radiusX, 2) +
      Math.pow(rotatedPointY, 2) / Math.pow(this.radiusY, 2);
    return result <= Constants.MYAKU_SENSITIVITY;
  }
}

/**
 * 目玉の楕円
 * ミャクミャク様の目玉
 */
class EyeMyaku extends Myaku {
  /**
   * @param {ShapeParams} shapeParams
   * @param {TypeParams} typeParams
   */
  constructor(shapeParams, typeParams) {
    super(shapeParams, typeParams);
    this.irisAngle = typeParams.irisAngle;
  }

  drawPath(context) {
    // 身体
    super.drawPath(context);

    const unitX = this.radiusX / 50;
    const unitY = this.radiusY / 50;
    const unitEye = this.radiusX < this.radiusY ? unitX : unitY;
    // 白目
    const whiteCoord = this.coord.findByHypAngle(unitX * 20, this.whiteAngle);
    const whiteXy = unitEye * 24;
    const whiteArc = new Myaku(new ShapeParams(whiteCoord, whiteXy, whiteXy, 0), new TypeParams(Constants.MYAKU_WHITE));
    whiteArc.drawPath(context);
    // 虹彩
    const irisCoord = whiteArc.coord.findByHypAngle(unitEye * 10, this.irisAngle);
    const irisXy = unitEye * 10;
    const iris = new Myaku(new ShapeParams(irisCoord, irisXy, irisXy, 0), TypeParams.createBlue());
    iris.drawPath(context);
  }
}

/**
 * ミャクのパラメーター
 */
class ShapeParams {
  /**
   * @param {Coord} coord
   * @param {number} radiusX
   * @param {number} radiusY
   * @param {number} whiteAngle
   */
  constructor(coord, radiusX, radiusY, whiteAngle) {
    this.coord = coord;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.whiteAngle = whiteAngle;
  }

  /**
   * まるいミャクスポーン時のパラメーター
   */
  static forArc() {
    const radius = Random.radius;
    return new ShapeParams(Coord.createRandom(), radius, radius, Random.whiteAngle);
  }

  /**
   * まるーいミャクスポーン時のパラメーター
   */
  static forEllipse() {
    const radiusXy = Random.radiusXy;
    return new ShapeParams(Coord.createRandom(), radiusXy[0], radiusXy[1], Random.whiteAngle);
  }
}

/**
 * ミャクの種別ごとのパラメーター
 */
class TypeParams {
  /**
   @param {string} bodyColor 身体の色
   @param {number} irisAngle 視線
   */
  constructor(bodyColor = "rgb(0, 0, 0)", irisAngle = 0) {
    this.bodyColor = bodyColor;
    this.irisAngle = irisAngle;
  }

  /**
   * ミャクミャク様のポンデリングを構成する色
   * もしくはいのちの輝き君の色
   * @return {TypeParams}
   */
  static createRed() {
    return new TypeParams(Constants.MYAKU_RED);
  }

  /**
   * ミャクミャク様の胴体と顔面を構成する要素
   * @return {TypeParams}
   */
  static createBlue() {
    return new TypeParams(Constants.MYAKU_BLUE);
  }

  /**
   * ミャクミャク様の目玉
   * @return {TypeParams}
   */
  static createEye() {
    return new TypeParams(Constants.MYAKU_RED, Random.irisAngle);
  }
}
