
class upload {
    constructor() {
      this.$uploadFile = () => $('//input[@class="input-file"]')
    }
  
    /**
     * Launching the url of the application
     * @param {string} url 
     */
    async openUrl(url) {
      await browser.maximizeWindow();
      await browser.url(url);
      await browser.setWindowSize(100, 150);
      await browser.pause(10000);
    }
  
    /**
     * Uploading the file 
     */
    async uploadf() {
    const filePath = 'webdriver-testing/dummy.pdf'
    const remoteFilePath = await browser.uploadFile(filePath)
    await this.$uploadFile().setValue(remoteFilePath)
    await browser.pause(3000);
    }
    
  }
  export default new upload();
  