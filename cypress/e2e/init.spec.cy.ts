describe("初期表示", () => {
  it("SEO項目", () => {
    cy.visit("/");
    cy.title().should("eq", "量産型 ミャクミャク様（りょうさんがた みゃくみゃくさま）");
  });
});
