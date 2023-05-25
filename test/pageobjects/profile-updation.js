import Common from "./common.js";
class Login extends Common {
  constructor() {
    super();
    this.$loginButton = () => $('//button[text()="Login "]');
    this.$loginHeader = () => $('//div[contains(text(),"Login")]');
    this.$signupButton = () => $("div.sgn_up_btn a");
    this.$registerHeader = () => $('//div[contains(text(),"Register")]');
    this.$registerFields = (fieldName) =>
      $(
        `//div[@class="modal-inner-wrap user-register-popup"]//input[@id="${fieldName}"]`
      );
    this.$verificationHeader = () =>
      $(".pop_header", "Verification Message Sent");
    this.$verifiationPopUp = () => $(".Register_popup");
    this.$verificationLogin = () =>
      $('//div[@class="subm_btn"]/a[@class="ng-binding"]		');
    this.$continueButton = () => $(".subm_btn");
    this.$Username = () => $('//span[@class="user-name ng-binding"]');
    this.$registretionPopUp = () => $('//div[@id="toast-container"]');
    this.$dropDownMenu = () =>
      $('//span[@class="userlogin-wrap-inner dropdown-toggle"]');
    this.$myAccount = () => $('//li[@ui-sref="my-account"]');
    this.$editProfilebutton = () => $('//a[text()="Edit Profile"]');
    this.$editProfileText = () => $('//button[@type="submit"]');
    this.$userFirstName = () => $('//input[@placeholder="First Name"]');
    this.$userLastName = () => $('//input[@placeholder="Last Name"]');
    this.$userEmail = () => $('//input[@placeholder="Email"]');
    this.$updateButton = () => $('//button[text()="Update Details"]');
    this.$validatingUpdatedPage = () => $('.//a[text()="Edit Profile"]');
    
  }

  /**
   * open url and launch the application.
   * @param {string} url
   */
  async openUrl(url) {
    await browser.maximizeWindow();
    await browser.url(url);
    await this.$loginButton().waitForDisplayed({
      timeout: 100000,
      timeoutMsg: "time out fail for login",
    });
  }

  /**
   * click on login button and navigate to login pop-up page.
   */
  async openLoginPopUp() {
    await this.$loginButton().click();
  }

  /**
   * click on sign-up button and navigate to register pop-up page.
   */
  async clickSignup() {
    await this.$signupButton().click();
    await this.$registerHeader().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "time out fail for register pop-up",
    });
  }

  /**
   * Enter random first name , last name , email and phone number
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} email
   * @param {string} phoneNumber
   */
  async fillRegistrationForm(firstName, lastName, email, phoneNumber) {
    await this.$registerFields("first_name").setValue(firstName);
    await this.$registerFields("last_name").setValue(lastName);
    await this.$registerFields("email").setValue(email);
    await this.$registerFields("tel").setValue(phoneNumber);
    await this.$continueButton().click();
  }

  /**
   * Click on the continue button
   */
  async verificationMessageSent() {
    await this.$verificationLogin().click();
    await this.$verificationHeader().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "time out fail for verification pop-up",
    });
  }

  /**
   * Click on 'My account' button
   */
  async goToMyAccount() {
    await this.$dropDownMenu().click();
    await this.$myAccount().waitForDisplayed({
      timeout: 10000,
      interval: true,
      timeoutMsg: "time out fail for dropdown menu pop-up",
    });
    await this.$myAccount().click();
  }

  /**
   * Click on 'Edot my profile' button
   */
  async editMyProfile() {
    await this.$editProfilebutton().click();
  }

  /**
   * Entering the new first name
   * @param {string} firstName
   * @param {*string} changedFirstname
   * @returns
   */
  async changeFirstName(firstName, changedFirstname) {
    const changingFirstName = await this.$userFirstName(firstName);
    await changingFirstName.setValue(firstName);
    changedFirstname = await changingFirstName.getValue();
    return changedFirstname;
  }

  /**
   * Entering the new first name
   * @param {string} lastName
   * @param {string} changedLastname
   * @returns
   */
  async changeFirstName(lastName, changedLastname) {
    const changingLastName = await this.$userLastName();
    await changingLastName.setValue(lastName);
    changedLastname = await changingLastName.getValue();
    return changedLastname;
  }

  /**
   * Enter the new Email
   * @param {string} newEmail
   * @param {string} changedEmail
   * @returns
   */
  async changeFirstName(newEmail, changedEmail) {
    const changingLastName = await this.$userEmail();
    await changingLastName.setValue(newEmail);
    changedEmail = await changingLastName.getValue();
    await this.$updateButton().click();
    return changedEmail;
  }

  /**
   * Verifying the updated and displayed name are same
   * @param {String} verifiedFirstname
   * @returns
   */
  async updatedProfileFullName(verifiedname) {
    const verifyingName = await this.$validatingUpdatedPage();
    verifiedname = await verifyingName.getText();
    return verifiedname;
  }

  /**
   * Verifying the updated and displayed email are same
   * @param {string} verifiedEmail 
   * @returns 
   */

  async updatedProfileEmail(verifiedEmail) {
    const verifyingEmail = await this.$validatingUpdatedPage();
    verifiedEmail = await verifyingEmail.getText();
    return verifiedEmail;
  }
}
export default new Login();