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
   * 配列から唯一つの要素をランダムに取得する
   * @param items - 対象要素の配列
   * @returns うち一つの要素
   */
  private static randomFromArray<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }
}
