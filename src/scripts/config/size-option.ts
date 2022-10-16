/**
 * 選択項目
 */
export class SizeOption extends Option {
  /**
   * 選択後に行う処理
   */
  readonly func: () => void;

  constructor(value: string, func: () => void) {
    super(value, value);
    this.func = func;
  }
}
