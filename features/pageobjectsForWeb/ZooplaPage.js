import { source } from "wd/lib/commands"
import BasePage from "./Base.page"
import helper from "../pageobjectsForWeb/helper"

class Zoopla extends BasePage{
    //Webelement locators

    //Actions methods

    async openbrowser(){

        await browser.newWindow('https://www.zoopla.co.uk/')
    }
    }
export default new Zoopla()