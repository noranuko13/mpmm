/**
 * キャンバスの幅
 */
const CANVAS_WIDTH = 640;

/**
 * キャンバスの高さ
 */
const CANVAS_HEIGHT = 360;

/**
 * 方眼紙の升目の単位
 */
const CANVAS_SCALE = 20;

/**
 * テスト実行
 * @param drawSuite - テストスイート描画メソッド
 */
export const execute = (drawSuite: (context: CanvasRenderingContext2D) => void) => {
  prepareElements(drawSuite.name);
  const canvas = document.getElementById(`${drawSuite.name}canvas`) as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Context Not Found");
  }
  drawGraphPaper(context);
  drawSuite(context);
  const button = document.getElementById(`${drawSuite.name}button`);
  if (!button) {
    throw new Error("Button Not Found");
  }
  button.onclick = () => {
    downloadImage(canvas);
  };
};

/**
 * 要素の準備
 * @param testKey - test01, test02 etc...
 */
const prepareElements = (testKey: string) => {
  const div = document.createElement("div");
  div.id = `${testKey}div`;

  const h2 = document.createElement("h2");
  h2.innerText = testKey;
  div.append(h2);

  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  canvas.id = `${testKey}canvas`;
  div.append(canvas);

  const button = document.createElement("button");
  button.id = `${testKey}button`;
  button.innerText = "Download";
  div.append(button);

  document.getElementById("test")?.append(div);
};

/**
 * 方眼紙の描画
 * @param context - キャンバス要素の2Dコンテキスト
 */
const drawGraphPaper = (context: CanvasRenderingContext2D) => {
  // 縦線
  for (let x = CANVAS_SCALE; x < CANVAS_WIDTH; x += CANVAS_SCALE) {
    context.moveTo(x, 0);
    context.lineTo(x, CANVAS_HEIGHT);
  }
  // 横線
  for (let y = CANVAS_SCALE; y < CANVAS_HEIGHT; y += CANVAS_SCALE) {
    context.moveTo(0, y);
    context.lineTo(CANVAS_WIDTH, y);
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
