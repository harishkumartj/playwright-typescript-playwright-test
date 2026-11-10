import { TestInfo, test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { ElementsPage } from '@pages/ElementsPage';
import { AlertsFrameWindowsPage } from '@pages/AlertsFrameWindowsPage';
import { WidgetsPage } from '@pages/WidgetsPage';
import { InteractionsPage } from '@pages/InteractionsPage';
import { WebActions } from '@lib/WebActions';
import AxeBuilder from '@axe-core/playwright';
import { BookStoreApplicationPage } from '@pages/BookStoreApplicationPage';

/*
To centralize custom fixture setup and reuse page objects and utilities across test files, 
avoiding repeated object creation in every test.
*/
const test = baseTest.extend<{
    webActions: WebActions;
    loginPage: LoginPage;
    elementsPage: ElementsPage;
    alertsFrameWindowsPage: AlertsFrameWindowsPage;
    widgetsPage: WidgetsPage;
    interactionsPage: InteractionsPage;
    makeAxeBuilder: AxeBuilder;
    testInfo: TestInfo;
    bookStoreApplicationPage:BookStoreApplicationPage

}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },

    /*webActions: async ({ page, context }, use) => {
    const actions = new WebActions(page, context);
    await use(actions);
}*/
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },
    elementsPage: async ({ page, context }, use) => {
        await use(new ElementsPage(page, context));
    },
    alertsFrameWindowsPage: async ({ page, context }, use) => {
        await use(new AlertsFrameWindowsPage(page, context));
    },
    widgetsPage: async ({ page, context }, use) => {
        await use(new WidgetsPage(page, context));
    },
   interactionsPage: async ({ page, context }, use) => {
        await use(new InteractionsPage(page, context));
    },

    bookStoreApplicationPage: async ({ page, context }, use) => {
        await use(new BookStoreApplicationPage(page,context));
    },


    makeAxeBuilder: async ({ page }, use) => {
        await use(new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .exclude('#commonly-reused-element-with-known-issue'));
    }
})

export default test;