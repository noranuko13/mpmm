"use strict";

/**
 * 定数
 */
class Constants {
  /**
   * スケッチの余白
   * ミャクスポーン時に余白より内側に描画する
   * @type {number} 余白サイズ
   */
  static SKEB_OFFSET = 25;

  /**
   * ミャク選択時の感度
   * @type {number}
   */
  static MYAKU_SENSITIVITY = 1.2;

  /**
   * ミャクミャク様の赤
   * @type {string} 色指定
   */
  static MYAKU_RED = "rgb(229, 0, 18)";

  /**
   * ミャクミャク様の青
   * @type {string} 色指定
   */
  static MYAKU_BLUE = "rgb(0, 104, 182)";

  /**
   * ミャクミャク様の白
   * @type {string} 色指定
   */
  static MYAKU_WHITE = "rgb(225, 225, 225)";

  /**
   * まるいミャクミャク様の大きさ
   * @type {number[]} 辺の長さ
   */
  static RADIUSES = [20, 30, 40, 50];

  /**
   * まるーいミャクミャク様の大きさ
   * @type {number[][]}
   */
  // prettier-ignore
  static RADIUS_XYS = [
    [20, 30], [30, 20],
    [20, 40], [40, 20],
    [20, 50], [50, 20],
    [20, 60], [60, 20],

    [30, 40], [40, 30],
    [30, 50], [50, 30],
    [30, 60], [60, 30],

    [40, 50], [50, 40],
    [40, 60], [60, 40],

    [50, 60], [60, 50],
  ];

  /**
   * ミャクミャク様の白目の角度
   * @type {number[]} 角度
   */
  static WHITE_ANGLES = [0, 45, 90, 135, 180, 125, 270, 315];

  /**
   * ミャクミャク様の瞳の角度
   * @type {number[]} 角度
   */
  static GAZE_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
}

/**
 * 乱数生成
 */
class Random {
  static get radius() {
    return this.#randomFrom(Constants.RADIUSES);
  }

  static get radiusXy() {
    return this.#randomFrom(Constants.RADIUS_XYS);
  }

  static get whiteAngle() {
    return this.#randomFrom(Constants.WHITE_ANGLES);
  }

  static get irisAngle() {
    return this.#randomFrom(Constants.GAZE_ANGLES);
  }

  static #randomFrom(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
}
