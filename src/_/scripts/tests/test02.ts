import { StyleParams } from "../../../scripts/sketch/style-params";
import { Coord } from "../../../scripts/sketch/coord";
import { ShapeParams } from "../../../scripts/sketch/shape-params";
import { EyeMyaku, IMyaku } from "../../../scripts/sketch/myaku";

/**
 * テスト02
 * @param context - キャンバス要素の2Dコンテキスト
 */
export const test02 = (context: CanvasRenderingContext2D) => {
  drawArcEyeMyakuEachSize(context);
  drawEllipseEyeMyakuEachSize(context);
};

/**
 * めだまの体操：大きさを変える運動～円～
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawArcEyeMyakuEachSize = (context: CanvasRenderingContext2D) => {
  let myaku: IMyaku;
  let coord: Coord;
  const styleParams = new StyleParams("rgb(0, 0, 0, 0.6)");

  // [20, 20]
  coord = new Coord(40, 60);
  myaku = new EyeMyaku(new ShapeParams(coord, 20, 20), styleParams);
  myaku.drawPath(context);
  // [30, 30]
  coord = new Coord(100, 60);
  myaku = new EyeMyaku(new ShapeParams(coord, 30, 30), styleParams);
  myaku.drawPath(context);
  // [40, 40]
  coord = new Coord(180, 60);
  myaku = new EyeMyaku(new ShapeParams(coord, 40, 40), styleParams);
  myaku.drawPath(context);
  // [50, 50]
  coord = new Coord(280, 60);
  myaku = new EyeMyaku(new ShapeParams(coord, 50, 50), styleParams);
  myaku.drawPath(context);
};

/**
 * めだまの体操：大きさを変える運動～楕円～
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawEllipseEyeMyakuEachSize = (context: CanvasRenderingContext2D) => {
  let myaku: IMyaku;
  let coord: Coord;
  let styleParams: StyleParams;

  styleParams = new StyleParams("rgb(255, 0, 0, 0.6)");
  // [20, 30]
  coord = new Coord(360, 70);
  myaku = new EyeMyaku(new ShapeParams(coord, 20, 30), styleParams);
  myaku.drawPath(context);
  // [20, 40]
  coord = new Coord(410, 70);
  myaku = new EyeMyaku(new ShapeParams(coord, 20, 40), styleParams);
  myaku.drawPath(context);
  // [20, 50]
  coord = new Coord(460, 70);
  myaku = new EyeMyaku(new ShapeParams(coord, 20, 50), styleParams);
  myaku.drawPath(context);
  // [20, 60]
  coord = new Coord(510, 70);
  myaku = new EyeMyaku(new ShapeParams(coord, 20, 60), styleParams);
  myaku.drawPath(context);

  styleParams = new StyleParams("rgb(0, 255, 0, 0.6)");
  // [30, 40]
  coord = new Coord(40, 170);
  myaku = new EyeMyaku(new ShapeParams(coord, 30, 40), styleParams);
  myaku.drawPath(context);
  // [30, 50]
  coord = new Coord(110, 170);
  myaku = new EyeMyaku(new ShapeParams(coord, 30, 50), styleParams);
  myaku.drawPath(context);
  // [30, 60]
  coord = new Coord(180, 170);
  myaku = new EyeMyaku(new ShapeParams(coord, 30, 60), styleParams);
  myaku.drawPath(context);

  styleParams = new StyleParams("rgb(0, 0, 255, 0.6)");
  // [40, 50]
  coord = new Coord(260, 170);
  myaku = new EyeMyaku(new ShapeParams(coord, 40, 50), styleParams);
  myaku.drawPath(context);
  // [40, 60]
  coord = new Coord(350, 170);
  myaku = new EyeMyaku(new ShapeParams(coord, 40, 60), styleParams);
  myaku.drawPath(context);

  styleParams = new StyleParams("rgb(255, 255, 0, 0.6)");
  // [50, 60]
  coord = new Coord(590, 70);
  myaku = new EyeMyaku(new ShapeParams(coord, 50, 60), styleParams);
  myaku.drawPath(context);

  styleParams = new StyleParams("rgb(255, 0, 0, 0.6)");
  // [20, 30]
  coord = new Coord(430, 160);
  myaku = new EyeMyaku(new ShapeParams(coord, 30, 20), styleParams);
  myaku.drawPath(context);
  // [20, 40]
  coord = new Coord(430, 210);
  myaku = new EyeMyaku(new ShapeParams(coord, 40, 20), styleParams);
  myaku.drawPath(context);
  // [20, 50]
  coord = new Coord(540, 210);
  myaku = new EyeMyaku(new ShapeParams(coord, 50, 20), styleParams);
  myaku.drawPath(context);
  // [20, 60]
  coord = new Coord(540, 160);
  myaku = new EyeMyaku(new ShapeParams(coord, 60, 20), styleParams);
  myaku.drawPath(context);

  styleParams = new StyleParams("rgb(0, 255, 0, 0.6)");
  // [30, 40]
  coord = new Coord(300, 260);
  myaku = new EyeMyaku(new ShapeParams(coord, 40, 30), styleParams);
  myaku.drawPath(context);
  // [30, 50]
  coord = new Coord(440, 270);
  myaku = new EyeMyaku(new ShapeParams(coord, 50, 30), styleParams);
  myaku.drawPath(context);
  // [30, 60]
  coord = new Coord(360, 320);
  myaku = new EyeMyaku(new ShapeParams(coord, 60, 30), styleParams);
  myaku.drawPath(context);

  styleParams = new StyleParams("rgb(0, 0, 255, 0.6)");
  // [40, 50]
  coord = new Coord(60, 280);
  myaku = new EyeMyaku(new ShapeParams(coord, 50, 40), styleParams);
  myaku.drawPath(context);
  // [40, 60]
  coord = new Coord(180, 280);
  myaku = new EyeMyaku(new ShapeParams(coord, 60, 40), styleParams);
  myaku.drawPath(context);

  styleParams = new StyleParams("rgb(255, 255, 0, 0.6)");
  // [50, 60]
  coord = new Coord(570, 300);
  myaku = new EyeMyaku(new ShapeParams(coord, 60, 50), styleParams);
  myaku.drawPath(context);
};
