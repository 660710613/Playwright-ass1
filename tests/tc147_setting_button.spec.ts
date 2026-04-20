//pattarapol
import { test, expect } from '@playwright/test';

test('TC-147: ตรวจสอบลิงค์ ตั้งค่าระบบ', async ({ page }) => {
    await page.goto('https://project-superend-cen8.vercel.app/',);
    const USERNAME = 'Admin1';
    const PASSWORD = 'examroom@1234';

    await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
    await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
    await page.getByRole('button', { name: 'ล็อกอิน' }).click();

    await expect(page).toHaveURL(/.*Home/);

    const menuButton = page.getByTitle('เปิดเมนู');
    await menuButton.click();

    await page.waitForTimeout(1000);

    const settingMenu = page.getByText('ตั้งค่าระบบ').last();
    await expect(settingMenu).toBeVisible({ timeout: 5000 });

    await Promise.all([
        page.waitForURL(/.*SystemManagement/i, { timeout: 15000 }),
        settingMenu.click()
    ]);

    await expect(page).toHaveURL(/.*SystemManagement/i);
    await page.waitForTimeout(2000);
});