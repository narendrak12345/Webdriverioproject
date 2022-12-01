import { Given,When,Then} from "@wdio/cucumber-framework";
import homepage from "../pageobjectsForWeb/Googlehomepage"
import zooplapage from "../pageobjectsForWeb/ZooplaPage"
const expectChai = require('chai').expect;


Given(/^lunch url$/, async ()=>{

      await homepage.openbrowser()
});
When(/^Search for the term zoopla$/, async()=>{

    await homepage.SearchAndClick()
});
Given(/^Open url in another tab check whether the page URL is the same$/, async ()=>{

    await zooplapage.openbrowser()
    expectChai(await browser.getUrl()).to.include('https://www.zoopla.co.uk/');
    await zooplapage.CheckTimetoLoad()
});