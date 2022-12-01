const { element } = require("wd/lib/commands");
const BasePage = require("./Base.page");
const helper=require("../pageobjectsForWeb/helper")

class zooplahomepage extends BasePage{


     //Webelement locators

     get EnterToSearch(){return $("//input[contains(@id,'downshift-')]")}
     get Clickonsrch(){return $("//button/div/div[2]")}
     get Allprice(){return $("//p[@class='css-ewn9q4 e8o8fn74']")}
     get Alllist(){return $("//button[@role='button'][1]")}
     get location(){return $("//h1[@data-testid='results-title']")}
     get Thirdprop(){return $("(//p[@class='c-bTssUX'])[3]")}
     get Selectedagentpage(){return $("//*[@id='main-content']/div[2]/div/div[1]/div[15]/div/section/div/div[1]/a/img")}
     get AgentName(){return $("//p[@class='css-1q5qety efkkbo93']")}
     get selectlogo(){return $("//*[@id='main-content']/div[2]/div/div[1]/div[15]/div/section/div/div[1]/a/img")}
     get Overviewpage(){return $("//*[@id='ui-id-1']/span")}
     get Agentphone(){return $("(//a[@data-ga-action='Call'])[2]")}
     get Propertyadress(){return $("//*[@id='listing-summary-details-heading']/div[2]/address")}
     get agentName(){return $("//*[@id='content']/div/h1/b[1]")}


 
     //Actions methods
async openbrowser(){
     await browser.navigateTo("https://www.zoopla.co.uk/")
     await browser.maximizeWindow()
     await browser.pause(4000)
}

async GetAllPriceDetails(){
      let allrpices= await this.Allprice
      allrpices.forEach(element=> {
      return element.getText()
});
}
 async SearchAndClick(){
     await browser.pause(3000)
     await this.EnterToSearch.isDisplayed()
     console.log(await this.EnterToSearch.getText())
     await this.EnterToSearch.setValue("London")
     await this.Clickonsrch.waitForClickable()
     console.log(await this.Clickonsrch.getText())
     await this.Clickonsrch.click()
     await browser.pause(3000) 
}
async LocationOfProperties(){

     await this.location.waitForExist()
     let text=await this.location.getText()
     return text
}
async FirstFiveproperties(){

   await browser.pause(4000)
   for(let i=1;i<=5;i++){
        await $("(//p[@class='c-bTssUX'])[" + i + "]").waitForExist()
   let fifthlist=await $("(//p[@class='c-bTssUX'])[" + i + "]")
   let eachvalue=await fifthlist.getText()
console.log("First five properties are=>"+ eachvalue.toString())
   }
} 
async ThirdValue(){

    await this.Thirdprop.waitForExist()
    await this.Thirdprop.click()
}
async OnselectedPageofAgent(){

    await this.Selectedagentpage.isEnabled()
    await this.Propertyadress.waitForExist()
    let name=await this.Propertyadress.getText()
    return name
}

async AfterSelectLogo(){

     await this.selectlogo.waitForExist()
     await this.selectlogo.click()
     await this.Overviewpage.waitForExist()
     let overivewpage=await this.Overviewpage.getText()
     return overivewpage
}
async AgentphoneNumber(){

     await this.Agentphone.isDisplayed()
     let Agentphonenum=await this.Agentphone.getText()
     return Agentphonenum
}
async PropertyAdress(){
     await this.Propertyadress.waitForExist()
     let Adressofproperty=await this.Propertyadress.getText()
     return Adressofproperty
}
async NameofAgent(){
     let AgentName=await this.agentName.getText()
     return AgentName
}
}
export default new zooplahomepage()