describe("ミャクの描画", () => {
  it("画像比較テスト", () => {
    const testKeys = ["test01"];
    cy.visit("/_");
    testKeys.forEach((testKey: string) => {
      cy.get("#test").find(`#${testKey}button`).click();
      cy.task("comparePng", { testKey: `${testKey}canvas` }).then((diff) => {
        expect(diff).to.equal(0);
      });
    });
  });
});
