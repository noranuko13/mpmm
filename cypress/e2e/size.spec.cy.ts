describe("設定おおきさ", () => {
  before(() => {
    cy.visit("/");
  });

  it("初期表示で『100%x60%』が選択されること", () => {
    cy.get("#size").should("have.value", "100%x60%");
    // heightPx: 720px * 60% = 432px (canvas 430px + border 2px)
    cy.assertCanvasSize(640, 430);
  });

  it("選択したプルダウンに応じてキャンバスサイズが変わること", () => {
    cy.get("select").select("100%x80%");
    // heightPx: 720px * 80% = 576px (canvas 574px + border 2px)
    cy.assertCanvasSize(640, 574);

    cy.get("select").select("640x360");
    cy.assertCanvasSize(640, 360);

    cy.get("select").select("640x640");
    cy.assertCanvasSize(640, 640);

    cy.get("select").select("100%x60%");
    cy.assertCanvasSize(640, 430);
  });

  it("画面サイズに応じてキャンバスサイズが変わること", () => {
    // スマホ
    cy.viewport(375, 750);
    cy.visit("/");
    cy.get("select").select("100%x60%");
    // widthPx: 375px = (canvas 373px + border 2px)
    // heightPx: 750px * 60% = 450px (canvas 448px + border 2px)
    cy.assertCanvasSize(373, 448);

    // タブレット
    cy.viewport(768, 1024);
    cy.visit("/");
    cy.get("select").select("100%x80%");
    // heightPx: 1024px * 80% = 819.2px (canvas 817.2px + border 2px)
    cy.assertCanvasSize(640, 817);
  });
});
