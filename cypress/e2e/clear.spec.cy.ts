describe("設定くりあ", () => {
  it("スケッチがクリアされること", () => {
    cy.clock(new Date("2025-04-13T00:09:01"));
    cy.visit("/");
    cy.get("select").select("640x360");
    // いくつかのミャクを描画
    cy.get("#redArc").click();
    cy.get("#blueArc").click();
    cy.get("#redEllipse").click();
    cy.get("#blueEllipse").click();
    // スケッチをクリア
    cy.get("#clear").click();
    cy.get("#download").click();
    const arg = { testKey: "myaku-myaku_20250413-000901", fixtureKey: "empty640x360" };
    cy.task("comparePng", arg).then((diff) => {
      expect(diff).to.eq(0);
    });
  });
});
