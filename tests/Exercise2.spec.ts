import { test, expect } from '@playwright/test';

test('Exercise 2: Filter and Cart management', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    const backpackItem = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });
    await backpackItem.getByRole('button', { name: 'Add to cart' }).click();

    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

    const bikeLightItem = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Bike Light' });
    await bikeLightItem.getByRole('button', { name: 'Add to cart' }).click();

    await expect(cartBadge).toHaveText('2');

    await backpackItem.getByRole('button', { name: 'Remove' }).click();
    await expect(cartBadge).toHaveText('1');
});