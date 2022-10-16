/// https://on.cypress.io/custom-commands

import { assertCanvasSize, assertDownloadFileExists } from "./commands/asserts";

Cypress.Commands.add("assertCanvasSize", assertCanvasSize);
Cypress.Commands.add("assertDownloadFileExists", assertDownloadFileExists);
