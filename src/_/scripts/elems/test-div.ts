import { Constants } from "../constants";

export class TestDiv {
  private targetDoc: Document;
  private readonly testKey: string;

  constructor(targetDocument: Document, testKey: string) {
    this.targetDoc = targetDocument;
    this.testKey = testKey;
    this.createDiv(this.testKey);
  }

  /**
   * 要素の生成
   * @param testKey - test01, test02 etc...
   */
  private createDiv(testKey: string) {
    const div = this.targetDoc.createElement("div");
    div.id = `${testKey}div`;

    const h2 = this.targetDoc.createElement("h2");
    h2.innerText = testKey;
    div.append(h2);

    const canvas = this.targetDoc.createElement("canvas");
    canvas.width = Constants.CANVAS_WIDTH;
    canvas.height = Constants.CANVAS_HEIGHT;
    canvas.id = this.canvasId;
    div.append(canvas);

    const button = this.targetDoc.createElement("button");
    button.id = this.buttonId;
    button.innerText = "Download";
    div.append(button);

    this.targetDoc.getElementById("test")?.append(div);
  }

  get canvasId() {
    return `${this.testKey}canvas`;
  }

  get canvas(): HTMLCanvasElement {
    return <HTMLCanvasElement>this.targetDoc.getElementById(this.canvasId);
  }

  get context(): CanvasRenderingContext2D {
    return <CanvasRenderingContext2D>this.canvas.getContext("2d");
  }

  get buttonId() {
    return `${this.testKey}button`;
  }

  get button(): HTMLButtonElement {
    return <HTMLButtonElement>this.targetDoc.getElementById(this.buttonId);
  }
}
