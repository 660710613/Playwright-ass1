// Napat
import { test, expect } from '@playwright/test';

test('TC110: select Admin user should show only Admin user', async ({ page }) => {
    await page.goto('https://project-superend-cen8.vercel.app/',);
    const USERNAME = 'Admin1';
    const PASSWORD = 'examroom@1234';

    await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
    await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
    await page.getByRole('button', { name: 'ล็อกอิน' }).click();
    await page.waitForNavigation();

    await expect(page).toHaveURL(/.*Home/);
    await page.getByRole('button', { name: 'เปิดเมนู' }).click();
    await page.getByRole('link', { name: 'ให้สิทธิ์กรรมการห้องอำนวยการสอบ' }).click();

    await page.locator('.css-8mmkcg').first().click();

    await page.getByText('Admin user (วิชาวิทยาศาสตร์ทั่วไป)', { exact: true }).first().click();

    const rows = page.locator('table tbody tr');
    await expect(rows.first()).toBeVisible();

    const rowCount = await rows.count();
    for (let i = 0; i < rowCount; i++) {
        await expect(rows.nth(i)).toContainText('Admin user');
    }
});
