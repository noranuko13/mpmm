import { Size } from "./config/size";
import { Elems } from "./elems";
import { Download } from "./config/download";
import { Canvas } from "./sketch/canvas";
import { Myaku } from "./sketch/myaku";
import { StyleParams } from "./sketch/style-params";
import { ShapeParams } from "./sketch/shape-params";
import { EyeMyaku } from "./sketch/eye-myaku";
import { Coord } from "./sketch/coord";
import { IMyaku } from "./sketch/i-myaku";

window.addEventListener("load", () => {
  const elems = new Elems(document);
  const canvas = new Canvas(elems);

  /**
   * まうす
   */
  // ひだりくりっく
  elems.canvas.onpointerdown = (event: PointerEvent) => {
    canvas.releaseMyaku();
    canvas.seekMyaku(Coord.createByMouse(event, elems.canvas), (myaku: IMyaku) => {
      canvas.eraseMyaku(myaku);
      canvas.putOnMyaku(myaku);
      canvas.grabMyaku(myaku);
    });
    canvas.redraw();
  };
  // みぎくりっく
  elems.canvas.oncontextmenu = (event: MouseEvent) => {
    event.preventDefault();
    canvas.seekMyaku(Coord.createByMouse(event, elems.canvas), (myaku) => {
      canvas.eraseMyaku(myaku);
    });
    canvas.redraw();
  };
  // すとっぷ
  elems.canvas.onpointerup = () => canvas.releaseMyaku();
  // はみでる
  elems.canvas.onpointerout = () => canvas.releaseMyaku();
  // まうすをうごかす
  elems.canvas.onpointermove = (event: PointerEvent) => {
    canvas.moveMyaku(Coord.createByMouse(event, elems.canvas));
    canvas.redraw();
  };

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

  // めだま
  elems.eyeArc.onclick = () => {
    const shapeParams = ShapeParams.forArc(elems.canvas.width, elems.canvas.height);
    canvas.putOnMyaku(new EyeMyaku(shapeParams, StyleParams.createEye()));
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

  // めだーま
  elems.eyeEllipse.onclick = () => {
    const shapeParams = ShapeParams.forEllipse(elems.canvas.width, elems.canvas.height);
    canvas.putOnMyaku(new EyeMyaku(shapeParams, StyleParams.createEye()));
    canvas.redraw();
  };

  /**
   * せってい
   */
  // おおきさ
  const size = new Size(elems);
  size.setOptions();
  elems.size.onchange = (event: Event) => {
    size.onChange(event);
    canvas.redraw();
  };

  // だうんろーど
  const download = new Download(elems);
  elems.download.onclick = () => download.onClick();

  // くりあ
  elems.clear.onclick = () => canvas.changeFabric();

  /**
   * テスト用の隠しコマンド
   */
  const keys: string[] = [];
  document.onkeydown = (event: KeyboardEvent) => {
    const COMMAND = "4b2fb724c6e49b";
    keys.push(event.key);
    if (keys.join("") === COMMAND) {
      canvas.putOnMyaku(new Myaku(new ShapeParams(new Coord(50, 50), 40, 40), new StyleParams("rgb(115, 103, 7)")));
      canvas.putOnMyaku(new Myaku(new ShapeParams(new Coord(90, 50), 40, 40), new StyleParams("rgb(34, 36, 38)")));
      canvas.redraw();
    }
    if (COMMAND.length < keys.length) {
      keys.splice(0);
    }
  };
});
