import { StyleParams } from "../../../scripts/sketch/style-params";
import { Coord } from "../../../scripts/sketch/coord";
import { EyeMyaku, IMyaku, Myaku } from "../../../scripts/sketch/myaku";
import { ShapeParams } from "../../../scripts/sketch/shape-params";
import { Constants } from "../../../scripts/constants";

/**
 * テスト01
 * @param context - キャンバス要素の2Dコンテキスト
 */
export const test01 = (context: CanvasRenderingContext2D) => {
  drawArc(context);
  drawEllipse(context);
  drawColored(context);
  drawAngledEllipse(context);
  drawEyeMyakuWhiteEye(context);
  drawEyeMyakuIris(context);
  drawArcCollisionDetection(context);
  drawEllipseAcuteCollisionDetection(context);
  drawEllipseObtuseCollisionDetection(context);
};

/**
 * 円の描画
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawArc = (context: CanvasRenderingContext2D) => {
  const styleParams = new StyleParams("rgb(0, 0, 0, 0.6)");
  let myaku: IMyaku;
  let coord: Coord;

  // [20, 20]
  coord = new Coord(40, 60);
  myaku = new Myaku(new ShapeParams(coord, 20, 20), styleParams);
  myaku.drawPath(context);
  // [30, 30]
  coord = new Coord(100, 60);
  myaku = new Myaku(new ShapeParams(coord, 30, 30), styleParams);
  myaku.drawPath(context);
  // [40, 40]
  coord = new Coord(180, 60);
  myaku = new Myaku(new ShapeParams(coord, 40, 40), styleParams);
  myaku.drawPath(context);
  // [50, 50]
  coord = new Coord(280, 60);
  myaku = new Myaku(new ShapeParams(coord, 50, 50), styleParams);
  myaku.drawPath(context);
};

/**
 * 楕円の描画
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawEllipse = (context: CanvasRenderingContext2D) => {
  let myaku: IMyaku;
  let coord: Coord;
  let styleParams: StyleParams;

  styleParams = new StyleParams("rgb(255, 0, 0, 0.6)");
  // [20, 30]
  coord = new Coord(40, 180);
  myaku = new Myaku(new ShapeParams(coord, 20, 30), styleParams);
  myaku.drawPath(context);
  // [20, 40]
  coord = new Coord(100, 180);
  myaku = new Myaku(new ShapeParams(coord, 20, 40), styleParams);
  myaku.drawPath(context);
  // [20, 50]
  coord = new Coord(160, 180);
  myaku = new Myaku(new ShapeParams(coord, 20, 50), styleParams);
  myaku.drawPath(context);
  // [20, 60]
  coord = new Coord(220, 180);
  myaku = new Myaku(new ShapeParams(coord, 20, 60), styleParams);
  myaku.drawPath(context);

  styleParams = new StyleParams("rgb(0, 255, 0, 0.6)");
  // [30, 40]
  coord = new Coord(280, 180);
  myaku = new Myaku(new ShapeParams(coord, 30, 40), styleParams);
  myaku.drawPath(context);
  // [30, 50]
  coord = new Coord(360, 180);
  myaku = new Myaku(new ShapeParams(coord, 30, 50), styleParams);
  myaku.drawPath(context);
  // [30, 60]
  coord = new Coord(440, 180);
  myaku = new Myaku(new ShapeParams(coord, 30, 60), styleParams);
  myaku.drawPath(context);

  styleParams = new StyleParams("rgb(0, 0, 255, 0.6)");
  // [40, 50]
  coord = new Coord(380, 60);
  myaku = new Myaku(new ShapeParams(coord, 40, 50), styleParams);
  myaku.drawPath(context);
  // [40, 60]
  coord = new Coord(480, 60);
  myaku = new Myaku(new ShapeParams(coord, 40, 60), styleParams);
  myaku.drawPath(context);

  styleParams = new StyleParams("rgb(255, 255, 0, 0.6)");
  // [50, 60]
  coord = new Coord(580, 60);
  myaku = new Myaku(new ShapeParams(coord, 50, 60), styleParams);
  myaku.drawPath(context);
};

/**
 * 色付きの描画
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawColored = (context: CanvasRenderingContext2D) => {
  let myaku;
  // あかいの
  myaku = new Myaku(new ShapeParams(new Coord(30, 120), 20, 20), StyleParams.createRed());
  myaku.drawPath(context);

  // あおいの
  myaku = new Myaku(new ShapeParams(new Coord(80, 120), 20, 20), StyleParams.createBlue());
  myaku.drawPath(context);

  // 白目
  myaku = new Myaku(new ShapeParams(new Coord(130, 120), 20, 20), new StyleParams(Constants.MYAKU_WHITE));
  myaku.drawPath(context);
};

/**
 * 角度の付いた楕円の描画
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawAngledEllipse = (context: CanvasRenderingContext2D) => {
  let x = 20;
  [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180].forEach((bodyAngle: number) => {
    const shapeParams = new ShapeParams(new Coord(x, 260), 10, 20, bodyAngle);
    const myaku = new Myaku(shapeParams, new StyleParams("rgb(0, 0, 0, 0.6)"));
    myaku.drawPath(context);
    x += 40;
  });
};

/**
 * めだまの体操：白目の運動
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawEyeMyakuWhiteEye = (context: CanvasRenderingContext2D) => {
  let x = 30;
  [0, 45, 90, 135, 180, -135, -90, -45, 0].forEach((whiteAngle: number) => {
    const shapeParams = new ShapeParams(new Coord(x, 300), 20, 20);
    const styleParams = new StyleParams(Constants.MYAKU_RED, whiteAngle);
    const myaku = new EyeMyaku(shapeParams, styleParams);
    myaku.drawPath(context);
    x += 48;
  });
};

/**
 * めだまの体操：虹彩の運動
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawEyeMyakuIris = (context: CanvasRenderingContext2D) => {
  let x = 30;
  [0, 45, 90, 135, 180, -135, -90, -45, 0].forEach((irisAngle: number) => {
    const shapeParams = new ShapeParams(new Coord(x, 340), 20, 20);
    const styleParams = new StyleParams(Constants.MYAKU_RED, -90, irisAngle);
    const myaku = new EyeMyaku(shapeParams, styleParams);
    myaku.drawPath(context);
    x += 48;
  });
};

/**
 * 円の当たり判定
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawArcCollisionDetection = (context: CanvasRenderingContext2D) => {
  const coord = new Coord(530, 170);
  const styleParams = new StyleParams("rgb(0, 0, 0, 0.2)");
  const myaku = new Myaku(new ShapeParams(coord, 40, 40, 0), styleParams);
  myaku.drawPath(context);
  // prettier-ignore
  [
    [- 43,    0],
    [   0, - 43],
    [   0, + 43],
    [+ 43,    0],

    [- 30, - 30],
    [+ 30, - 30],
    [- 30, + 30],
    [+ 30, + 30],
  ].forEach((xy: number[]) => {
    const dotCoord = new Coord(coord.x + xy[0], coord.y + xy[1]);
    drawCoord(dotCoord, "red", context);
    inRange(dotCoord, myaku);
  });
  // prettier-ignore
  [
    [- 44,    0],
    [   0, - 44],
    [   0, + 44],
    [+ 44,    0],

    [- 31, - 31],
    [+ 31, - 31],
    [- 31, + 31],
    [+ 31, + 31],
  ].forEach((xy: number[]) => {
    const dotCoord = new Coord(coord.x + xy[0], coord.y + xy[1]);
    drawCoord(dotCoord, "blue", context);
    outOfRange(dotCoord, myaku);
  });
};

/**
 * 鋭角の楕円の当たり判定
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawEllipseAcuteCollisionDetection = (context: CanvasRenderingContext2D) => {
  const coord = new Coord(580, 250);
  const styleParams = new StyleParams("rgb(0, 0, 0, 0.2)");
  const myaku = new Myaku(new ShapeParams(coord, 30, 60, 45), styleParams);
  myaku.drawPath(context);
  // prettier-ignore
  [
    [+ 41,    0],
    [- 41,    0],
    [   0, - 41],
    [   0, + 41],

    [- 23, - 23],
    [+ 46, - 46],
    [- 46, + 46],
    [+ 23, + 23],
  ].forEach((xy: number[]) => {
    const dotCoord = new Coord(coord.x + xy[0], coord.y + xy[1]);
    drawCoord(dotCoord, "deeppink", context);
    inRange(dotCoord, myaku);
  });
  // prettier-ignore
  [
    [+ 42,    0],
    [- 42,    0],
    [   0, - 42],
    [   0, + 42],

    [- 24, - 24],
    [+ 47, - 47],
    [- 47, + 47],
    [+ 24, + 24],
  ].forEach((xy: number[]) => {
    const dotCoord = new Coord(coord.x + xy[0], coord.y + xy[1]);
    drawCoord(dotCoord, "cyan", context);
    outOfRange(dotCoord, myaku);
  });
};

/**
 * 鈍角の楕円の当たり判定
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawEllipseObtuseCollisionDetection = (context: CanvasRenderingContext2D) => {
  const coord = new Coord(480, 320);
  const styleParams = new StyleParams("rgb(0, 0, 0, 0.2)");
  const myaku = new Myaku(new ShapeParams(coord, 20, 30, 165), styleParams);
  myaku.drawPath(context);
  // prettier-ignore
  [
    [+ 22,    0],
    [- 22,    0],
    [   0, - 31],
    [   0, + 31],

    [- 20, - 20],
    [+ 16, - 17],
    [- 16, + 17],
    [+ 20, + 20],
  ].forEach((xy: number[]) => {
    const dotCoord = new Coord(coord.x + xy[0], coord.y + xy[1]);
    drawCoord(dotCoord, "darkorange", context);
    inRange(dotCoord, myaku);
  });
  // prettier-ignore
  [
    [+ 23,    0],
    [- 23,    0],
    [   0, - 32],
    [   0, + 32],

    [- 20, - 21],
    [+ 16, - 18],
    [- 16, + 18],
    [+ 20, + 21],
  ].forEach((xy: number[]) => {
    const dotCoord = new Coord(coord.x + xy[0], coord.y + xy[1]);
    drawCoord(dotCoord, "green", context);
    outOfRange(dotCoord, myaku);
  });
};

/**
 * 座標を描画する
 * @param coord - 座標
 * @param strokeStyle - 描画色
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawCoord = (coord: Coord, strokeStyle: string, context: CanvasRenderingContext2D) => {
  context.beginPath();
  context.strokeStyle = strokeStyle;
  context.arc(coord.x, coord.y, 0.6, 0, Math.PI * 2, true);
  context.fillStyle = strokeStyle;
  context.fill();
  context.stroke();
};

/**
 * ミャクが範囲外の場合は例外とする
 * @param coord - 座標
 * @param myaku - ミャク
 */
const inRange = (coord: Coord, myaku: IMyaku) => {
  if (!myaku.inRange(coord)) {
    throw new Error("Coord out of range");
  }
};

/**
 * ミャクが範囲内の場合は例外とする
 * @param coord - 座標
 * @param myaku - ミャク
 */
const outOfRange = (coord: Coord, myaku: IMyaku) => {
  if (myaku.inRange(coord)) {
    throw new Error("Coord in range");
  }
};
