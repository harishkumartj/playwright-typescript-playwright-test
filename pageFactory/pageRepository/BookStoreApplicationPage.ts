import { Page, BrowserContext, Locator } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';
import { cli } from 'winston/lib/winston/config';

let webActions: WebActions;

export class BookStoreApplicationPage{

    readonly page:Page;
    readonly context:BrowserContext;
    readonly forms:Locator;
    readonly practiceForm:Locator;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly genderMale:Locator;
    readonly dateBirth:Locator;
    readonly practice:Locator
    readonly submitBtn:Locator;

constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.practiceForm = page.getByText("//span[text()='Practice Form']")
        this.firstName = page.locator('#firstName')
       this.lastName = page.locator('#lastName')
       this.genderMale=page.locator("//input[@value='Male']")
       this.dateBirth=page.locator('#dateOfBirthInput')
       this.practice=page.getByText('Forms')
       this.submitBtn=page.locator('#submit')
    }

    async clickPractice():Promise<void>{
    await this.practice.click()
}

async clickPracticeForm():Promise<void>{
    await this.practiceForm.click()
}

async enterFirstName():Promise<void>{
    
    await this.firstName.fill(testConfig.usernamee);
}

async enterLastName():Promise<void>{
    await this.lastName.fill(testConfig.lastnamee)
}

async selectMaleRadio():Promise<void>{
    await this.genderMale.check()
}

async enterDate():Promise<void>{
    await this.dateBirth.fill(testConfig.dob)
}

async clickSubmit():Promise<void>{
    await this.submitBtn.click()
}


}