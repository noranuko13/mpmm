import { Constants } from "./constants";
import { TestDiv } from "./elems";

/**
 * テスト実行
 * @param drawSuite - テストスイート描画メソッド
 */
export const execute = (drawSuite: (context: CanvasRenderingContext2D) => void) => {
  const testDiv = new TestDiv(document, drawSuite.name);
  drawGraphPaper(testDiv.context);
  drawSuite(testDiv.context);
  testDiv.button.onclick = () => downloadImage(testDiv.canvas);
};

/**
 * 方眼紙の描画
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawGraphPaper = (context: CanvasRenderingContext2D) => {
  // 縦線
  for (let x = Constants.CANVAS_SCALE; x < Constants.CANVAS_WIDTH; x += Constants.CANVAS_SCALE) {
    context.moveTo(x, 0);
    context.lineTo(x, Constants.CANVAS_HEIGHT);
  }
  // 横線
  for (let y = Constants.CANVAS_SCALE; y < Constants.CANVAS_HEIGHT; y += Constants.CANVAS_SCALE) {
    context.moveTo(0, y);
    context.lineTo(Constants.CANVAS_WIDTH, y);
  }
  context.strokeStyle = "#888";
  context.stroke();
};

/**
 * 画像をダウンロード
 * @param canvas - キャンバス要素
 */
const downloadImage = (canvas: HTMLCanvasElement) => {
  const anchor = document.createElement("a");
  anchor.href = canvas.toDataURL("image/png");
  anchor.download = canvas.id;
  return anchor.click();
};
