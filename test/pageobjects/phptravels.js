class phptravels {
  constructor() {
    this.$signUpButton = () => $('//a[text()="Signup"]');
  }

  async openUrl(url) {
    await browser.maximizeWindow();
    await browser.url(url);
  }

/**
 * Click on the signup button and returning back to the home page 
 */
  async signUp() {
    await this.$signUpButton().click();
    let switchHandles= await browser.getWindowHandles();
    await browser.switchToWindow(switchHandles[1]);
  }

}
export default new phptravels();
