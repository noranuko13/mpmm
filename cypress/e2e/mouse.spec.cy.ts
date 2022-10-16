describe("マウスイベント", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("select").select("640x360");
    cy.get("body").type("4b2fb724c6e49b");
  });

  it("ミャクを掴んで移動できること", () => {
    cy.clock(new Date("2025-10-13T00:01:01"));
    cy.get("#canvas").trigger("mousedown", 40, 50).trigger("mousemove", 130, 100).trigger("mouseup", { force: true });
    cy.get("#download").click();
    const arg = { testKey: "myaku-myaku_20251013-000101" };
    cy.task("comparePng", arg).then((diff) => {
      expect(diff).to.eq(0);
    });
  });

  it("右クリックでミャクを削除できること", () => {
    cy.clock(new Date("2025-10-13T00:02:01"));
    cy.get("#canvas").rightclick(40, 50);
    cy.get("#download").click();
    const arg = { testKey: "myaku-myaku_20251013-000201" };
    cy.task("comparePng", arg).then((diff) => {
      expect(diff).to.eq(0);
    });
  });

  it("キャンバスの描画領域外にはみ出さないこと", () => {
    cy.clock(new Date("2025-10-13T00:03:01"));
    cy.get("body")
      .trigger("mousedown", 360, 50)
      .trigger("mousemove", 360, 350)
      .trigger("mouseout", 360, 350) // 擬似再現
      .trigger("mousemove", 360, 400)
      .trigger("mouseup", 360, 400);
    cy.get("#download").click();
    const arg = { testKey: "myaku-myaku_20251013-000301" };
    cy.task("comparePng", arg).then((diff) => {
      expect(diff).to.eq(0);
    });
  });
});
