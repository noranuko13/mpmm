import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcss from "postcss";

export class CssConfig {
  static get ext() {
    return ".css";
  }

  static assignHashedExt(f, commitHash) {
    return f.replaceAll(`${this.ext}`, `.${commitHash}${this.ext}`);
  }

  static async minify(f) {
    return await postcss([autoprefixer, cssnano])
      .process(f, {from: undefined})
      .then((result) => {
        return result.css;
      });
  }
}
