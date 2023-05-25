import loginPage from "../pageobjects/flow2-page.js";
let count = 10;
xdescribe('Basic flow of EDelivery Application', () => {
    it('Open URL and load the application', async () => {
        await loginPage.openUrl('https://edelivery.zoproduct.com/');
        await expect(browser).toHaveUrl('https://edelivery.zoproduct.com/');
    });
    it('Entered the location', async () => {
        await loginPage.locationSearch("chennai");
        await expect(browser).toHaveUrl('https://edelivery.zoproduct.com/chennai/5eba800fb38f74523bc5c41e/restaurants');
    });
    it('Select the purchasing category', async () => {
        await loginPage.purchasingOption();
        await expect(browser).toHaveUrl('https://edelivery.zoproduct.com/r/chennai/max-fashions/0');
    });
    it ("Incrementing the product " , async ()=>{
        await loginPage.addToCartPopUp(count);
        expect(await loginPage.$cartHeader()).toHaveText('White shirt')
        expect(await loginPage.$checkingQuantity()).toBeDisplayed(11)
    })
    it ("Adding the proct to the cart " , async ()=>{
        await loginPage.addToCart();
    })
    it ("checking the price " , async ()=>{
        // await loginPage.checkPrice();
        const elem = await $('(//span[text()="Item Total"])[1]/ancestor::div[@class="total-amount-detail"]//div[@class="amount-detail"]')
        await expect(elem).toBeDisplayed("₹6,930.00")
    })
})