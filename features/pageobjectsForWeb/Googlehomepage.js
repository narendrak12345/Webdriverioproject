import BasePage from "./Base.page"
import help from "./helper"

class homepage extends BasePage{

    //Webelement locators

    get searchpage(){return $("//input[@class='gLFyf']")}
    get frame1(){return $("//*[@id='gb']/div/div[3]/iframe")}
    get textforframe(){return $("//button[@aria-label='No thanks']")}


    //Actions methods

    async openbrowser(){

        await browser.navigateTo("https://www.google.co.in/")
    }

    async SearchAndClick(){

        await this.frame1.waitForExist()
        await browser.switchToFrame(await this.frame1)
        let ClickNoThanks=await this.textforframe
        console.log(ClickNoThanks.getText())
        await ClickNoThanks.isDisplayed()
        await ClickNoThanks.click()
        await browser.switchToParentFrame()
        await this.searchpage.waitForDisplayed()
        await this.searchpage.setValue("zoopla")
        await browser.keys('Enter')
    }
}
export default new homepage()