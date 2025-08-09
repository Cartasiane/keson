import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import { expect, test } from 'vitest';

// Ensure the viewer page includes a calendar button linking to cal.html
// so we can test the new code modification reliably.

test('index.html has a calendar button linking to cal.html', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const dom = new JSDOM(html);
  const link = dom.window.document.querySelector('a.calendar-btn');
  expect(link).not.toBeNull();
  expect(link.getAttribute('href')).toContain('cal.html');
});
