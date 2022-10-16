/**
 * 定数
 */
export class Constants {
  /**
   * ミャクスポーン時に余白より内側に描画する
   * 余白サイズ(px)
   */
  static SKEB_OFFSET = 25;

  /**
   * ミャク選択時の感度
   */
  static MYAKU_SENSITIVITY = 1.2;

  /**
   * まるいミャクの大きさ
   * X半径(px) = Y半径(px)
   */
  static RADIUSES = [20, 30, 40, 50];

  /**
   * まるーいミャクの大きさ
   * [X半径(px), Y半径(px)]
   */
  static RADIUS_XYS = [
    [20, 30],
    [20, 40],
    [20, 50],
    [20, 60],

    [30, 40],
    [30, 50],
    [30, 60],

    [40, 50],
    [40, 60],

    [50, 60],
  ];

  /**
   * ミャクの角度
   */
  static BODY_ANGLES = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165];

  /**
   * ミャクミャク様の白目の角度
   */
  static WHITE_ANGLES = [0, 45, 90, 135, 180, -135, -90, -45, 0];

  /**
   * ミャクミャク様の瞳の角度
   */
  static IRIS_ANGLES = [0, 45, 90, 135, 180, -135, -90, -45, 0];

  /**
   * ミャクミャク様の赤
   */
  static MYAKU_RED = "rgb(229, 0, 18)";

  /**
   * ミャクミャク様の青
   */
  static MYAKU_BLUE = "rgb(0, 104, 182)";

  /**
   * ミャクミャク様の白
   */
  static MYAKU_WHITE = "rgb(225, 225, 225)";
}