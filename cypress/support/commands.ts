/// https://on.cypress.io/custom-commands

import { assertCanvasSize } from "./commands/asserts";

Cypress.Commands.add("assertCanvasSize", assertCanvasSize);
