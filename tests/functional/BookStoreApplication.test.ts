import test from '@lib/BaseTest';
import { WebActions } from '@lib/WebActions';
import { BookStoreApplicationPage } from '@pages/BookStoreApplicationPage';
import { expect } from '@playwright/test';

test('to verify the book store application', async ({ loginPage, bookStoreApplicationPage, webActions }) => {

    test.step('Navigate to the application', async () => {
        await loginPage.navigateToURL()
    });

    await test.step('Click on Book Store Application Icon', async () => {
        await webActions.clickByText('Book Store Application');
    });

    await test.step('Click on forms', async () => {
        await bookStoreApplicationPage.clickPractice();
    });

    await test.step('Click on practice forms', async () => {
        await webActions.clickByText('Practice Form');
    });

     await test.step('enter first name', async () => {
        await bookStoreApplicationPage.enterFirstName();
    });

     await test.step('enter last name', async () => {
        await bookStoreApplicationPage.enterLastName();
    });
    
      await test.step('select male radio check box', async () => {
        await bookStoreApplicationPage.selectMaleRadio()
      });

        await test.step('enter date', async () => {
        await bookStoreApplicationPage.enterDate()
      });

      await test.step('click submit button', async () => {
        await bookStoreApplicationPage.clickSubmit()
      });


});