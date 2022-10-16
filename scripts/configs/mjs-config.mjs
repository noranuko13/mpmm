import {minify} from "terser";

export class MjsConfig {
  static get ext() {
    return ".mjs";
  }

  static assignHashedExt(f, commitHash) {
    return f.replaceAll(`${this.ext}`, `.${commitHash}${this.ext}`);
  }

  static async minify(f) {
    const output = await minify(f);
    return output.code;
  }
}
