import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';

import { generateArchive } from '../scripts/generate-solutions.mjs';

const exportPath = process.env.NNG4_EXPORT;

test('generates one readable entry for every completed exported level', { skip: !exportPath }, () => {
  const outputDirectory = mkdtempSync(join(tmpdir(), 'nng4-solutions-'));

  try {
    const result = generateArchive(exportPath, outputDirectory);
    const source = JSON.parse(readFileSync(exportPath, 'utf8'));
    const expected = Object.entries(source.data).flatMap(([world, levels]) =>
      Object.entries(levels).filter(([, level]) =>
        typeof level === 'object' && level !== null && level.completed === true && level.code.trim() !== '',
      ).map(([level]) => `${world}/${level}`),
    );

    assert.equal(result.levelCount, expected.length);
    assert.equal(result.levelCount, 78);

    for (const [world, levels] of Object.entries(source.data)) {
      const emitted = join(outputDirectory, `${world}.md`);
      assert.ok(existsSync(emitted), `${world} should produce one Markdown file`);
      const content = readFileSync(emitted, 'utf8');
      assert.doesNotMatch(content, /readIntro/);

      for (const [level, solution] of Object.entries(levels)) {
        if (typeof solution === 'object' && solution !== null && solution.completed === true && solution.code.trim() !== '') {
          assert.match(content, new RegExp(`## Level ${level}\\n`));
          assert.ok(content.includes(`\`\`\`lean\n${solution.code}\`\`\``));
        }
      }
    }
  } finally {
    rmSync(outputDirectory, { recursive: true, force: true });
  }
});

test('README sets expectations for this first-try solution archive', () => {
  const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');

  assert.match(readme, /https:\/\/adam\.math\.hhu\.de\/#\/g\/leanprover-community\/NNG4/);
  assert.match(readme, /first (?:playthrough|try)/i);
  assert.match(readme, /redundant|mergeable/i);
  assert.match(readme, /do not compile independently|not.*standalone.*compil/i);
  assert.match(readme, /MIT License/);
});
