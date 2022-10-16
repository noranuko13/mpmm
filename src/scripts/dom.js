"use strict";

/**
 * HTML要素のラッパークラス
 */
class Elems {
  /** @returns {HTMLBodyElement} */
  static get body() {
    return document.getElementsByTagName("body").item(0);
  }

  /** @returns {HTMLDivElement} */
  static get sketch() {
    return document.getElementById("sketch");
  }

  /** @returns {HTMLCanvasElement} */
  static get canvas() {
    return document.getElementById("canvas");
  }

  /** @returns {RenderingContext} */
  static get context() {
    return this.canvas.getContext("2d");
  }

  /** @returns {HTMLSelectElement} */
  static get size() {
    return document.getElementById("size");
  }

  /** @returns {HTMLButtonElement} */
  static get download() {
    return document.getElementById("download");
  }

  /** @returns {HTMLButtonElement} */
  static get clear() {
    return document.getElementById("clear");
  }

  /** @returns {HTMLButtonElement} */
  static get redArc() {
    return document.getElementById("redArc");
  }

  /** @returns {HTMLButtonElement} */
  static get blueArc() {
    return document.getElementById("blueArc");
  }

  /** @returns {HTMLButtonElement} */
  static get eyeArc() {
    return document.getElementById("eyeArc");
  }

  /** @returns {HTMLButtonElement} */
  static get redEllipse() {
    return document.getElementById("redEllipse");
  }

  /** @returns {HTMLButtonElement} */
  static get blueEllipse() {
    return document.getElementById("blueEllipse");
  }

  /** @returns {HTMLButtonElement} */
  static get eyeEllipse() {
    return document.getElementById("eyeEllipse");
  }
}

/**
 * プルダウン項目
 */
class SizeOption {
  /**
   * @type {string} テキスト
   */
  #innerText;
  /**
   * @type {string} 値
   */
  #value;
  /**
   * @type {Function} 処理
   */
  #func;

  constructor(innerText, value, func) {
    this.#innerText = innerText;
    this.#value = value;
    this.#func = func;
  }

  /**
   * @return {string}
   */
  get innerText() {
    return this.#innerText;
  }

  /**
   * @return {string}
   */
  get value() {
    return this.#value;
  }

  /**
   * @return {Function}
   */
  get func() {
    return this.#func;
  }
}

/**
 * サイズ
 */
class Size {
  /**
   * @type {SizeOption[]} プルダウン項目の配列
   */
  static ITEMS = [
    new SizeOption("100%x60%", "100%x60%", () => {
      Sketch.resizeCanvasByPercent(100, 60);
    }),
    new SizeOption("100%x80%", "100%x80%", () => {
      Sketch.resizeCanvasByPercent(100, 80);
    }),
    new SizeOption("640x360", "640x360", () => {
      Sketch.resizeCanvas(640, 360);
    }),
    new SizeOption("640x640", "640x640", () => {
      Sketch.resizeCanvas(640, 640);
    }),
  ];

  /**
   * プルダウンにオプションを設定する
   */
  static setOptions() {
    Elems.size.innerHTML = "";
    for (let i = 0; i < Size.ITEMS.length; i++) {
      const sizeOption = Size.ITEMS[i];
      let option = document.createElement("option");
      option.innerText = sizeOption.innerText;
      option.value = sizeOption.value;
      Elems.size.options.add(option);
    }
    Size.ITEMS[0].func();
  }

  /**
   * プルダウン選択時に処理を実行する
   * @param {string} value
   */
  static change(value) {
    Size.ITEMS.find((sizeOption) => {
      return sizeOption.value === value;
    }).func();
  }
}

/**
 * ダウンロード
 */
class Download {
  /**
   * ダウンロード用のリンクを作成する
   * @returns {HTMLAnchorElement}
   */
  static createAnchor() {
    const filename = `myaku-myaku_${this.#formatYyyymmddHhmmss(new Date())}.png`;
    let anchor = document.createElement("a");
    anchor.href = Elems.canvas.toDataURL("image/png");
    anchor.download = filename;
    return anchor;
  }

  /**
   * 日付を文字列(yyyymmdd-hhmmss)に変換する
   * @param {Date} date 日付
   * @returns {string} "yyyymmdd-hhmmss"
   */
  static #formatYyyymmddHhmmss(date) {
    return (
      this.#padZero(date.getFullYear()) +
      this.#padZero(date.getMonth() + 1) +
      this.#padZero(date.getDate()) +
      "-" +
      this.#padZero(date.getHours()) +
      this.#padZero(date.getMinutes()) +
      this.#padZero(date.getSeconds())
    );
  }

  /**
   * 文字列を0埋めする
   * @param str 文字列
   * @param maxLength 埋める桁数
   * @returns {string} ゼロパディング後の文字列
   */
  static #padZero(str, maxLength = 2) {
    return str.toString().padStart(maxLength, "0");
  }
}
