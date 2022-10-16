import { SizeOption } from "./size-option";
import { Elems } from "../elems";

/**
 * サイズ プルダウン
 */
export class Size {
  private elems: Elems;

  constructor(elems: Elems) {
    this.elems = elems;
  }

  /**
   * 選択項目リスト
   */
  private options: SizeOption[] = [
    new SizeOption("100%x60%", () => {
      this.resizeCanvasByPct(100, 60);
    }),
    new SizeOption("100%x80%", () => {
      this.resizeCanvasByPct(100, 80);
    }),
    new SizeOption("640x360", () => {
      this.resizeCanvasByPx(640, 360);
    }),
    new SizeOption("640x640", () => {
      this.resizeCanvasByPx(640, 640);
    }),
  ];

  /**
   * プルダウンにオプションを設定する
   */
  setOptions() {
    const fragment = new DocumentFragment();
    this.options.map((option) => fragment.append(option));
    this.elems.size.replaceChildren(fragment);
    this.options[0].func();
  }

  /**
   * プルダウン選択時に処理を実行する
   * @param event - イベント
   */
  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    const option =
      this.options.find((sizeOption) => {
        return sizeOption.value === value;
      }) || this.options[0];
    option.func();
  }

  /**
   * ピクセル指定で描画領域のサイズを変更する
   * @param widthPx - キャンバスの幅(px)
   * @param heightPx - キャンバスの高さ(px)
   */
  private resizeCanvasByPx(widthPx: number, heightPx: number) {
    this.elems.canvas.width = widthPx;
    this.elems.canvas.height = heightPx;
  }

  /**
   * パーセント指定で描画領域のサイズを変更する
   * @param widthPct - キャンバスの幅(%)
   * @param heightPct - キャンバスの高さ(%)
   */
  private resizeCanvasByPct(widthPct: number, heightPct: number) {
    this.elems.canvas.width = (this.elems.sketch.clientWidth * widthPct) / 100 - 2;
    this.elems.canvas.height = (this.elems.body.clientHeight * heightPct) / 100 - 2;
  }
}
