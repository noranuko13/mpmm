export class Elems {
  private targetDoc: Document;

  constructor(targetDocument: Document) {
    this.targetDoc = targetDocument;
  }

  get body(): HTMLBodyElement {
    return <HTMLBodyElement>this.targetDoc.getElementsByTagName("body").item(0);
  }

  get sketch(): HTMLDivElement {
    return <HTMLDivElement>this.targetDoc.getElementById("sketch");
  }

  get canvas(): HTMLCanvasElement {
    return <HTMLCanvasElement>this.targetDoc.getElementById("canvas");
  }

  get context(): CanvasRenderingContext2D {
    return <CanvasRenderingContext2D>this.canvas.getContext("2d");
  }

  get redArc(): HTMLButtonElement {
    return <HTMLButtonElement>this.targetDoc.getElementById("redArc");
  }

  get redEllipse(): HTMLButtonElement {
    return <HTMLButtonElement>this.targetDoc.getElementById("redEllipse");
  }

  get blueArc(): HTMLButtonElement {
    return <HTMLButtonElement>this.targetDoc.getElementById("blueArc");
  }

  get blueEllipse(): HTMLButtonElement {
    return <HTMLButtonElement>this.targetDoc.getElementById("blueEllipse");
  }

  get size(): HTMLSelectElement {
    return <HTMLSelectElement>this.targetDoc.getElementById("size");
  }

  get download(): HTMLButtonElement {
    return <HTMLButtonElement>this.targetDoc.getElementById("download");
  }

  get clear(): HTMLButtonElement {
    return <HTMLButtonElement>this.targetDoc.getElementById("clear");
  }
}
