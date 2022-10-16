"use strict";

window.addEventListener("load", function () {
  const sketch = new Sketch();

  /**
   * まうす
   */
  // ひだりくりっく
  Elems.canvas.onmousedown = (event) => {
    sketch.releaseShape();

    sketch.seekShape(Coord.createByMouse(event), (myaku) => {
      const tmpShape = myaku;
      sketch.eraseShape(myaku);
      sketch.appendShape(tmpShape);
      sketch.grabShape(myaku);
    });

    sketch.redraw();
  };
  // みぎくりっく
  Elems.canvas.oncontextmenu = (event) => {
    event.preventDefault();

    sketch.seekShape(Coord.createByMouse(event), (myaku) => {
      sketch.eraseShape(myaku);
    });
    sketch.redraw();
  };
  // すとっぷ
  Elems.canvas.onmouseup = () => {
    sketch.releaseShape();
  };
  // はみでる
  Elems.canvas.onmouseout = () => {
    sketch.releaseShape();
  };
  // まうすをうごかす
  Elems.canvas.onmousemove = (event) => {
    sketch.moveShape(Coord.createByMouse(event));
    sketch.redraw();
  };

  /**
   * すぽなー
   */
  // あかいの
  Elems.redArc.onclick = () => {
    sketch.appendShape(new Myaku(ShapeParams.forArc(), TypeParams.createRed()));
    sketch.redraw();
  };
  // あおいの
  Elems.blueArc.onclick = () => {
    sketch.appendShape(new Myaku(ShapeParams.forArc(), TypeParams.createBlue()));
    sketch.redraw();
  };
  // めだま
  Elems.eyeArc.onclick = () => {
    sketch.appendShape(new EyeMyaku(ShapeParams.forArc(), TypeParams.createEye()));
    sketch.redraw();
  };
  // あかーいの
  Elems.redEllipse.onclick = () => {
    sketch.appendShape(new Myaku(ShapeParams.forEllipse(), TypeParams.createRed()));
    sketch.redraw();
  };
  // あおーいの
  Elems.blueEllipse.onclick = () => {
    sketch.appendShape(new Myaku(ShapeParams.forEllipse(), TypeParams.createBlue()));
    sketch.redraw();
  };
  // めだーま
  Elems.eyeEllipse.onclick = () => {
    sketch.appendShape(new EyeMyaku(ShapeParams.forEllipse(), TypeParams.createRed()));
    sketch.redraw();
  };

  /**
   * せってい
   */
  // おおきさ
  Size.setOptions();
  Elems.size.onchange = (event) => {
    Size.change(event.target.value);
    sketch.redraw();
  };
  // だうんろーど
  Elems.download.onclick = () => {
    sketch.capture();
  };
  // くりあ
  Elems.clear.onclick = () => {
    sketch.clearMyakuList();
    sketch.gesso();
  };
});
