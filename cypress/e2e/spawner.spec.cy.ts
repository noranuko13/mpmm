describe("スポナー", () => {
  it("あかいのが描画されること", () => {
    cy.clock(new Date("2025-04-13T00:01:01"));
    cy.visit("/");
    cy.get("select").select("640x360");
    cy.get("#redArc").click();
    cy.get("#download").click();
    const arg = { testKey: "myaku-myaku_20250413-000101", fixtureKey: "empty640x360" };
    cy.task("comparePng", arg).then((diff) => {
      expect(diff).to.gte(1000);
    });
  });

  it("あかーいのが描画されること", () => {
    cy.clock(new Date("2025-04-13T00:02:01"));
    cy.visit("/");
    cy.get("select").select("640x360");
    cy.get("#redEllipse").click();
    cy.get("#download").click();
    const arg = { testKey: "myaku-myaku_20250413-000201", fixtureKey: "empty640x360" };
    cy.task("comparePng", arg).then((diff) => {
      expect(diff).to.gte(1000);
    });
  });

  it("あおいのが描画されること", () => {
    cy.clock(new Date("2025-04-13T00:03:01"));
    cy.visit("/");
    cy.get("select").select("640x360");
    cy.get("#blueArc").click();
    cy.get("#download").click();
    const arg = { testKey: "myaku-myaku_20250413-000301", fixtureKey: "empty640x360" };
    cy.task("comparePng", arg).then((diff) => {
      expect(diff).to.gte(1000);
    });
  });

  it("あおーいのが描画されること", () => {
    cy.clock(new Date("2025-04-13T00:04:01"));
    cy.visit("/");
    cy.get("select").select("640x360");
    cy.get("#blueEllipse").click();
    cy.get("#download").click();
    const arg = { testKey: "myaku-myaku_20250413-000401", fixtureKey: "empty640x360" };
    cy.task("comparePng", arg).then((diff) => {
      expect(diff).to.gte(1000);
    });
  });

  it("めだまが描画されること", () => {
    cy.clock(new Date("2025-04-13T00:05:01"));
    cy.visit("/");
    cy.get("select").select("640x360");
    cy.get("#eyeArc").click();
    cy.get("#download").click();
    const arg = { testKey: "myaku-myaku_20250413-000501", fixtureKey: "empty640x360" };
    cy.task("comparePng", arg).then((diff) => {
      expect(diff).to.gte(1000);
    });
  });

  it("めだーまが描画されること", () => {
    cy.clock(new Date("2025-04-13T00:06:01"));
    cy.visit("/");
    cy.get("select").select("640x360");
    cy.get("#eyeEllipse").click();
    cy.get("#download").click();
    const arg = { testKey: "myaku-myaku_20250413-000601", fixtureKey: "empty640x360" };
    cy.task("comparePng", arg).then((diff) => {
      expect(diff).to.gte(1000);
    });
  });
});
