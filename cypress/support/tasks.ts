import fs from "fs";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

export const tasks: Cypress.Tasks = {
  comparePng({ testKey, fixtureKey }) {
    return comparePng(testKey, fixtureKey);
  },
};

/**
 * PNG画像を比較する
 * @param testKey test01, test02 etc...
 * @param fixtureKey empty640x360, test01 etc...
 * @returns 差分ピクセル数
 */
const comparePng = async (testKey: string, fixtureKey = ""): Promise<number> => {
  if (fixtureKey === "") {
    fixtureKey = testKey;
  }
  const expectedImage = PNG.sync.read(fs.readFileSync(`cypress/fixtures/${fixtureKey}.png`));

  const path = `cypress/downloads/${testKey}.png`;
  let actualImage;
  for (let i = 0; i < 3; i++) {
    if (fs.existsSync(path)) {
      actualImage = PNG.sync.read(fs.readFileSync(path));
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  if (!actualImage) {
    throw new Error("testKey.png Not Found");
  }

  const { width, height } = expectedImage;
  const diffImage = new PNG({ width, height });
  const diff = pixelmatch(expectedImage.data, actualImage.data, diffImage.data, width, height);
  fs.writeFileSync(`cypress/downloads/${testKey}-diff.png`, PNG.sync.write(diffImage));
  return diff;
};
