import { Given,When,Then} from "@wdio/cucumber-framework";
import { element } from "wd/lib/commands";
import zooplahome from "../pageobjectsForWeb/Zooplahomepage"
const expectChai = require('chai').expect;
const { expect } = require('chai')

Given(/^Launch the URL$/,async ()=>{

    await zooplahome.openbrowser()
});

When(/^Input the location as London under the For Sale tab and click the search button$/,async()=>{

    await zooplahome.SearchAndClick()
});
Then(/^The result will be the list of properties based on the preferred location$/, async ()=>{

    let res=await zooplahome.LocationOfProperties()
    console.log("New value of location\n"+ res)
    expectChai(res).to.include('Property for sale in London');

   });

Then(/^Print the price values of the first 5 properties in the console$/,async()=>{
 
    await zooplahome.FirstFiveproperties()
    console.log("First Five values of properties")
});

When(/^Select the 3rd property from the list$/,async()=>{
  
    await zooplahome.ThirdValue()
    console.log("Selecting Third property value and clicking")
});

When(/^On selecting the property, there is a logo, name, and telephone number of the agent$/, async ()=>{
  
    console.log("On selecting the property, there is a logo, name, and telephone number of the agent")
    let propertyadress=await zooplahome.OnselectedPageofAgent()
    console.log("Property adress=>"+propertyadress)
    expect(await zooplahome.Propertyadress.isDisplayed()).equals(true)

});
Then(/^Click on the logo and go to the agent's page$/,async()=>{

    let Text=await zooplahome.AfterSelectLogo()
    console.log("Navigating confirm after click on logo=>"+Text)
    expectChai(Text).to.include('Overview')
    
});

Then(/^Verify whether the property is listed on the agent's page using the assertion method$/,async()=>{

    let Agentname=await zooplahome.NameofAgent()
    console.log("Agent Name is=>" +Agentname)
    expect(await zooplahome.agentName.isDisplayed()).equals(true)

    let phonenumber=await zooplahome.AgentphoneNumber()
    console.log("Agent phone num is=>" +phonenumber)
    expect(await zooplahome.Agentphone.isDisplayed()).equals(true)

});