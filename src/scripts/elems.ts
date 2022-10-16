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

  get size(): HTMLSelectElement {
    return <HTMLSelectElement>this.targetDoc.getElementById("size");
  }

  get download(): HTMLButtonElement {
    return <HTMLButtonElement>this.targetDoc.getElementById("download");
  }
}
