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
}
