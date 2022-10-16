import { Constants } from "../constants";

/**
 * 外見パラメータ
 */
export class StyleParams {
  /**
   * 身体の色
   */
  readonly bodyColor: string;

  constructor(bodyColor = "rgb(0, 0, 0)") {
    this.bodyColor = bodyColor;
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
}
