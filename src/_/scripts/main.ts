import { execute } from "./execute";
import { test01, test02, test03 } from "./tests";

window.addEventListener("load", function () {
  execute(test01);
  execute(test02);
  execute(test03);
});
