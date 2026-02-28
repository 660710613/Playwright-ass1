import { test, expect } from '@playwright/test';


test('Exercise 1: Login and verify product list', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/.*inventory.html/);

    await expect(page.getByText('Products')).toBeVisible();

    const productItems = page.locator('.inventory_item');
    await expect(productItems).toHaveCount(6);
});

