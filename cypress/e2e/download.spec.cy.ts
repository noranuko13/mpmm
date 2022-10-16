describe("設定だうんろーど", () => {
  it("ファイルがダウンロードできること", () => {
    cy.clock(new Date("2025-04-13T00:08:01"));
    cy.visit("/");
    cy.get("#download").click();
    cy.assertDownloadFileExists("myaku-myaku_20250413-000801.png");
  });
});
