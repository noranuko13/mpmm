import { execute } from "./tools";
import { test01 } from "./test01";
import { test02 } from "./test02";
import { test03 } from "./test03";

window.addEventListener("load", function () {
  execute(test01);
  execute(test02);
  execute(test03);
});
