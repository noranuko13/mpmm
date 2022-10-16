import { Elems } from "../elems";

/**
 * ダウンロード ボタン
 */
export class Download {
  private elems: Elems;

  constructor(elems: Elems) {
    this.elems = elems;
  }

  /**
   * ボタンクリック時にダウンロード処理を実行する
   */
  onClick() {
    this.createAnchor().click();
  }

  /**
   * ダウンロード用のリンク要素を生成する
   */
  private createAnchor() {
    const filename = `myaku-myaku_${this.formatYyyymmddHhmmss(new Date())}.png`;
    const anchor = document.createElement("a");
    anchor.href = this.elems.canvas.toDataURL("image/png");
    anchor.download = filename;
    return anchor;
  }

  /**
   * 日付を文字列(yyyymmdd-hhmmss)に変換する
   * @param date - 日付
   * @returns "yyyymmdd-hhmmss"
   */
  private formatYyyymmddHhmmss(date: Date): string {
    return (
      date.getFullYear() +
      this.padZero(date.getMonth() + 1) +
      this.padZero(date.getDate()) +
      "-" +
      this.padZero(date.getHours()) +
      this.padZero(date.getMinutes()) +
      this.padZero(date.getSeconds())
    );
  }

  /**
   * 数字の0埋めを行う
   * @param num - 数字
   * @param maxLength - 埋める桁数
   * @returns ゼロパディング後の文字列
   */
  private padZero(num: number, maxLength = 2): string {
    return num.toString().padStart(maxLength, "0");
  }
}
