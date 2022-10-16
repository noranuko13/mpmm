import { Myaku } from "./myaku";
import { ShapeParams } from "./shape-params";
import { StyleParams } from "./style-params";
import { Constants } from "../constants";

/**
 * 目玉の楕円
 * ミャクミャク様の目玉
 */
export class EyeMyaku extends Myaku {
  drawPath(context: CanvasRenderingContext2D) {
    // 身体
    super.drawPath(context);

    const unitX = this.shapeParams.radiusX / 50;
    const unitY = this.shapeParams.radiusY / 50;
    const unitEye = this.shapeParams.radiusX < this.shapeParams.radiusY ? unitX : unitY;

    // 白目
    const whiteCoord = this.shapeParams.coord.findByHypAngle(unitX * 18, this.styleParams.whiteAngle);
    const whiteXy = unitEye * 24;
    const whiteArc = new Myaku(
      new ShapeParams(whiteCoord, whiteXy, whiteXy, 0),
      new StyleParams(Constants.MYAKU_WHITE)
    );
    whiteArc.drawPath(context);

    // 虹彩
    const irisCoord = whiteCoord.findByHypAngle(unitEye * 10, this.styleParams.irisAngle);
    const irisXy = unitEye * 10;
    const iris = new Myaku(new ShapeParams(irisCoord, irisXy, irisXy, 0), StyleParams.createBlue());
    iris.drawPath(context);
  }
}
