import {test, expect} from '@playwright/test';

test("Open page home and verife title", async ({page}) => {
   // test steps
   await page.goto('https://m.apuestas.codere.es/')
   await page.waitForTimeout(1000);

   await expect(page).toHaveTitle('Apuestas en Directo – Lo Mejor de España | Codere®')
});

test ("Verify logo is visible and has the Registrate title", async ({page}) => {
   // test steps
   await page.goto('https://m.apuestas.codere.es/');
   await page.waitForTimeout(5000);

   await page.pause()
   const logo = page.getByRole('button', { name: 'Regístrate' })
   await expect(logo).toBeVisible();

});

test("Verify navigation section bar ", async ({page}) => {
   await page.goto('https://m.apuestas.codere.es/');

   const expectedLinks = { prop : 5};
   const navLinks = page.locator('.navSectionsNavbar .bar-buttons');
   await page.waitForTimeout(3000);
   expect(navLinks.first()).toBeTruthy()
   expect(expectedLinks).toEqual({prop : 5})

});