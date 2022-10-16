import glob from "tiny-glob";
import {execSync} from "child_process";
import * as fs from "fs";
import * as path from "path";
import {MjsConfig} from "./configs/mjs-config.mjs";
import {CssConfig} from "./configs/css-config.mjs";
import {HtmlConfig} from "./configs/html-config.mjs";

const SRC_DIR = "src";
const DIST_DIR = "dist";

fs.rmSync(DIST_DIR, {recursive: true, force: true});

/** @type {MjsConfig[]|CssConfig[]|HtmlConfig[]} */
const configs = [MjsConfig, CssConfig, HtmlConfig];
const commitHash = execSync("git rev-parse --short HEAD").toString().trim();

for (const srcPath of await glob(`${SRC_DIR}/**/*.*`)) {
  const config = configs.find((c) => {
    return c.ext === path.extname(srcPath);
  });
  const distPath = config
    .assignHashedExt(srcPath, commitHash)
    .replace(SRC_DIR, DIST_DIR);

  const distDirname = path.dirname(distPath);
  if (!fs.existsSync(distDirname)) {
    fs.mkdirSync(distDirname, {recursive: true});
  }

  const raw = fs.readFileSync(srcPath).toString();
  const processed = config.assignHashedExt(raw, commitHash);
  const distFile = await config.minify(processed);
  fs.writeFileSync(distPath, distFile);
}
