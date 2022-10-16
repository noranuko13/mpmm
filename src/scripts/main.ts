import { Size } from "./config/size";
import { Elems } from "./elems";
import { Download } from "./config/download";
import { Canvas } from "./sketch/canvas";
import { Myaku } from "./sketch/myaku";
import { StyleParams } from "./sketch/style-params";
import { ShapeParams } from "./sketch/shape-params";

window.addEventListener("load", () => {
  const elems = new Elems(document);
  const canvas = new Canvas(elems);

  /**
   * すぽなー
   */
  // あかいの
  elems.redArc.onclick = () => {
    const shapeParams = ShapeParams.forArc(elems.canvas.width, elems.canvas.height);
    canvas.putOnMyaku(new Myaku(shapeParams, StyleParams.createRed()));
    canvas.redraw();
  };

  // あかーいの
  elems.redEllipse.onclick = () => {
    const shapeParams = ShapeParams.forEllipse(elems.canvas.width, elems.canvas.height);
    canvas.putOnMyaku(new Myaku(shapeParams, StyleParams.createRed()));
    canvas.redraw();
  };

  // あおいの
  elems.blueArc.onclick = () => {
    const shapeParams = ShapeParams.forArc(elems.canvas.width, elems.canvas.height);
    canvas.putOnMyaku(new Myaku(shapeParams, StyleParams.createBlue()));
    canvas.redraw();
  };

  // あおーいの
  elems.blueEllipse.onclick = () => {
    const shapeParams = ShapeParams.forEllipse(elems.canvas.width, elems.canvas.height);
    canvas.putOnMyaku(new Myaku(shapeParams, StyleParams.createBlue()));
    canvas.redraw();
  };

  /**
   * せってい
   */
  // おおきさ
  const size = new Size(elems);
  size.setOptions();
  elems.size.onchange = (event: Event) => size.onChange(event);

  // だうんろーど
  const download = new Download(elems);
  elems.download.onclick = () => download.onClick();
});
