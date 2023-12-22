import { test, expect } from '@playwright/experimental-ct-vue';
import { LTableComponent } from '../src/index';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(LTableComponent);
  await expect(component).toContainText('leen table');
});