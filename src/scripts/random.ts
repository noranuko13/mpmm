import { Constants } from "./constants";

/**
 * ランダム
 */
export class Random {
  /**
   * まるいミャクの大きさをランダムに取得する
   * @returns ミャクのX半径(px)=Y半径(px)
   */
  static get radius(): number {
    return this.randomFromArray<number>(Constants.RADIUSES);
  }

  /**
   * まるーいミャクの大きさをランダムに取得する
   * @returns [ミャクのX半径(px), ミャクのY半径(px)]
   */
  static get radiusXy(): number[] {
    return this.randomFromArray(Constants.RADIUS_XYS);
  }

  /**
   * ミャクの角度をランダムに取得する
   * @returns ミャクの角度 15, 30, 45 etc...
   */
  static get bodyAngle() {
    return this.randomFromArray(Constants.BODY_ANGLES);
  }

  /**
   * 配列から唯一つの要素をランダムに取得する
   * @param items - 対象要素の配列
   * @returns うち一つの要素
   */
  private static randomFromArray<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }
}
