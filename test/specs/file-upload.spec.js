import loginPage from "../pageobjects/file-upload.js";
xdescribe("Basic flow of EDelivery Application", () => {
  it("Open URL and load the application", async () => {
    await loginPage.openUrl(
      "https://www.techlistic.com/p/selenium-practice-form.html"
    );
  });

  it("Click on the signup button", async () => {
    await loginPage.uploadf();
  });
});
