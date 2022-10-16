import {minify} from "html-minifier";

export class HtmlConfig {
  static get ext() {
    return ".html";
  }

  static assignHashedExt(f, commitHash) {
    f = f.replaceAll(`main.css`, `main.${commitHash}.css`);
    f = f.replaceAll(`main.mjs`, `main.${commitHash}.mjs`);
    return f;
  }

  static async minify(f) {
    return minify(f, {
      removeComments: true,
      collapseWhitespace: true,
    });
  }
}
