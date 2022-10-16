import { Size } from "./config/size";
import { Elems } from "./elems";

window.addEventListener("load", () => {
  const elems = new Elems(document);

  /**
   * せってい
   */
  // おおきさ
  const size = new Size(elems);
  size.setOptions();
  elems.size.onchange = (event: Event) => size.onChange(event);
});
