import profileVerify from '../pageobjects/phptravels.js';
xdescribe("Basic flow of EDelivery Application", () => {
    it("Open URL and load the application", async () => {
      await profileVerify.openUrl("https://phptravels.com/");
      // await expect(browser).toHaveUrl("https://phptravels.com/demo/");
    });

    it("Click on the signup button" , async () =>{
      await profileVerify.signUp();
    });
});

