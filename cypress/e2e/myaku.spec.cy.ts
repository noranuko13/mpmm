describe("ミャクの描画", () => {
  it("画像比較テスト", () => {
    const testKeys = ["test01", "test02", "test03"];
    cy.visit("/_");
    testKeys.forEach((testKey: string) => {
      cy.get("#test").find(`#${testKey}button`).click();
      cy.task("comparePng", { testKey: `${testKey}canvas` }).then((diff) => {
        expect(diff).to.eq(0);
      });
    });
  });
});
