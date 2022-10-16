import { StyleParams } from "../../scripts/sketch/style-params";
import { Coord } from "../../scripts/sketch/coord";
import { Myaku } from "../../scripts/sketch/myaku";
import { ShapeParams } from "../../scripts/sketch/shape-params";
import { IMyaku } from "../../scripts/sketch/i-myaku";

/**
 * テスト01
 * @param context - キャンバス要素の2Dコンテキスト
 */
export const test01 = (context: CanvasRenderingContext2D) => {
  drawArc(context);
  drawEllipse(context);
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
