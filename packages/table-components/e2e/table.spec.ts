import { test, expect } from '@playwright/experimental-ct-vue';
import Table from '../src/table.vue';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(Table);
  await expect(component).toContainText('leen table');
});