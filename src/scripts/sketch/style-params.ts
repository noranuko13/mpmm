import { Constants } from "../constants";
import { Random } from "../random";

/**
 * 外見パラメータ
 */
export class StyleParams {
  /**
   * 身体の色
   */
  readonly bodyColor: string;

  /**
   * 白目の角度
   */
  readonly whiteAngle: number;

  /**
   * 虹彩の角度
   */
  readonly irisAngle: number;

  constructor(bodyColor = "rgb(0, 0, 0)", whiteAngle = 0, irisAngle = 0) {
    this.bodyColor = bodyColor;
    this.whiteAngle = whiteAngle;
    this.irisAngle = irisAngle;
  }

  /**
   * ミャクミャク様のポンデリングを構成する色
   * いのちの輝き君の色
   * @returns 外見パラメータ
   */
  static createRed() {
    return new StyleParams(Constants.MYAKU_RED);
  }

  /**
   * ミャクミャク様の胴体と顔面を構成する色
   * @returns 外見パラメータ
   */
  static createBlue() {
    return new StyleParams(Constants.MYAKU_BLUE);
  }

  /**
   * ミャクミャク様の目玉
   * @returns 外見パラメータ
   */
  static createEye() {
    return new StyleParams(Constants.MYAKU_RED, Random.whiteAngle, Random.irisAngle);
  }
}
