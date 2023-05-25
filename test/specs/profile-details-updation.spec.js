import loginPage from "../pageobjects/profile-updation.js";
// test\pageobjects\profile-updation.js
let email = `${Math.random().toString(36).substring(2, 8)}@mailsac.com`;
let newEmail = `${Math.random().toString(36).substring(3, 8)}@mailsac.com`;
let phoneNumber = Math.floor(Math.random() * 10000000000);
let firstName = await loginPage.reassaignRandomLetters(6);
let lastName = await loginPage.reassaignRandomLetters(6);
let changedLastname;
let changedFirstname;
let changedEmail;
let verifiedname;
let verifiedEmail;

describe("Update the user's profile information and verify the data entered and displayed data are the same", () => {
  it("Open URL and load the application", async () => {
    await loginPage.openUrl("https://edelivery.zoproduct.com/");
    await expect(browser).toHaveUrl("https://edelivery.zoproduct.com/");
  });

  it("Click on login button and check if pop-up window appears", async () => {
    await loginPage.openLoginPopUp();
    expect(await loginPage.$loginHeader().isDisplayed()).toBe(true);
  });

  it("Click on sign-up button and check if register pop-up appears", async () => {
    await loginPage.clickSignup();
    expect(await loginPage.$registerHeader().isDisplayed()).toBe(true);
  });

  it("Enter the details on the required feilds", async () => {
    let firstName = await loginPage.getRandomLetters(6);
    await loginPage.fillRegistrationForm(
      firstName,
      "johnsina",
      email,
      phoneNumber
    );
    expect(await loginPage.$verificationHeader().isDisplayed()).toBe(true);
  });

  it("Click on login button on 'Verification Message Sent' pop up", async () => {
    await loginPage.verificationMessageSent();
    expect(await loginPage.$verificationHeader().isDisplayed()).toBe(true);
  });

  it("Click on the button 'Login' and verify the 'Registered Successfully' pop up appeared", async () => {
    const elem = await $('//div[@id="toast-container"]');
    await expect(elem).toBeDisplayed("Registered Successfully");
  });

  it("Click on 'My account' button", async () => {
    await loginPage.goToMyAccount();
    await expect(browser).toHaveUrl(
      "https://edelivery.zoproduct.com/my-account"
    );
  });

  it("Click on the 'Edit profile' button", async () => {
    await loginPage.editMyProfile();
  });

  it("Enter new first name", async () => {
    await loginPage.changeFirstName(firstName, changedFirstname);
    expect(await changedFirstname).toBeDisplayed(firstName);
    expect(await loginPage.$editProfileText()).toBeDisplayed("UPDATE DETAILS");
  });

  it("Enter new last name", async () => {
    await loginPage.changeFirstName(lastName, changedLastname);
    expect(await changedLastname).toBeDisplayed(lastName);
  });

  it("Enter new email", async () => {
    await loginPage.changeFirstName(newEmail, changedEmail);
    expect(await changedEmail).toBeDisplayed(newEmail);
  });

  it("Click on the 'Update details' button, verify the updated and displayed full name are same", async () => {
    await loginPage.updatedProfileFullName(verifiedname);
    expect(await verifiedname).toBeDisplayed(firstName+lastName);
  });

  it("Click on the 'Update details' button, verify the updated and displayed email are same", async () => {
    await loginPage.updatedProfileEmail(verifiedEmail);
    expect(await verifiedEmail).toBeDisplayed(newEmail);
  });

});
