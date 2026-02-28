import { test, expect } from '@playwright/test';

test('Exercise 3: Advanced Assertions', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Login' }).click();

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('do not match');

    await expect(page.getByPlaceholder('Username')).toHaveClass(/.*error.*/);

    await page.locator('.error-button').click();
    await expect(errorMessage).not.toBeVisible();

    await page.getByPlaceholder('Password').clear();
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/.*inventory.html/);

    const sortDropdown = page.locator('.product_sort_container');

    await expect(sortDropdown).toBeVisible({ timeout: 10000 });

    await sortDropdown.selectOption('lohi');

    const firstProductPrice = page.locator('.inventory_item_price').first();
    await expect(firstProductPrice).toHaveText('$7.99');
});