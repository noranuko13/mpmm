export const assertCanvasSize = (widthPx: number, heightPx: number) => {
  cy.get("#canvas").invoke("width").should("eq", widthPx);
  cy.get("#canvas").invoke("height").should("eq", heightPx);
};
