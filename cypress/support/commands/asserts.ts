import path from "path";

export const assertCanvasSize = (widthPx: number, heightPx: number) => {
  cy.get("#canvas").invoke("width").should("eq", widthPx);
  cy.get("#canvas").invoke("height").should("eq", heightPx);
};

export const assertDownloadFileExists = (filename: string) => {
  const filePath = path.join(Cypress.config("downloadsFolder"), filename);
  cy.readFile(filePath, "binary", { timeout: 15000 }).should((buffer) => {
    // cypress-io/cypress-example-recipes
    expect(buffer.length).to.be.gt(1000);
  });
};
