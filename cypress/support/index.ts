/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
declare namespace Cypress {
  // noinspection JSUnusedGlobalSymbols
  interface Chainable {
    /**
     * キャンバスサイズを検証する
     * @param widthPx - キャンバスの幅
     * @param heightPx - キャンバスの高さ
     */
    assertCanvasSize(widthPx: number, heightPx: number): Chainable<Element>;

    /**
     * ダウンロードしたファイルの存在確認
     * @param filename - ファイル名
     */
    assertDownloadFileExists(filename: string): Chainable<Element>;
  }
}
