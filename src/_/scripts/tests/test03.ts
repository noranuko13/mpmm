import { StyleParams } from "../../../scripts/sketch/style-params";
import { Coord } from "../../../scripts/sketch/coord";
import { ShapeParams } from "../../../scripts/sketch/shape-params";
import { Myaku } from "../../../scripts/sketch/myaku";

/**
 * テスト03
 * @param context - キャンバス要素の2Dコンテキスト
 */
export const test03 = (context: CanvasRenderingContext2D) => {
  drawMyakuWhileMovingPosition(context);
};

/**
 * 座標の移動
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawMyakuWhileMovingPosition = (context: CanvasRenderingContext2D) => {
  const styleParams = new StyleParams("rgb(0, 0, 0, 0.6)");
  const myaku = new Myaku(new ShapeParams(new Coord(40, 40), 20, 20), styleParams);

  [-10, 0, 20, 50].forEach((x: number) => {
    myaku.movePosition(new Coord(40 + x, 40));
    myaku.drawPath(context);
  });

  [-10, 0, 20, 50].forEach((y: number) => {
    myaku.movePosition(new Coord(40, 40 + y));
    myaku.drawPath(context);
  });

  myaku.movePosition(new Coord(90, 90));
  myaku.drawPath(context);
};
