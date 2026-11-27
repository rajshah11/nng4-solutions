import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function generateArchive(exportPath, outputDirectory) {
  const progress = JSON.parse(readFileSync(exportPath, 'utf8'));
  let levelCount = 0;

  mkdirSync(outputDirectory, { recursive: true });

  for (const [world, levels] of Object.entries(progress.data)) {
    const solutions = Object.entries(levels)
      .filter(([, level]) => isCompletedSolution(level))
      .sort(([left], [right]) => Number(left) - Number(right));

    const body = [
      `# ${world}`,
      'Tactics recorded during a first playthrough of the Numbers Game.',
      ...solutions.map(([level, solution]) => `## Level ${level}\n\n\`\`\`lean\n${solution.code}\`\`\``),
    ].join('\n\n').concat('\n');

    writeFileSync(resolve(outputDirectory, `${world}.md`), body);
    levelCount += solutions.length;
  }

  return { levelCount, worldCount: Object.keys(progress.data).length };
}

function isCompletedSolution(level) {
  return typeof level === 'object'
    && level !== null
    && level.completed === true
    && typeof level.code === 'string'
    && level.code.trim() !== '';
}

function main() {
  const [exportPath, outputDirectory = 'solutions'] = process.argv.slice(2);

  if (!exportPath) {
    throw new Error('Usage: node generate-solutions.mjs <progress-export.json> [output-directory]');
  }

  const result = generateArchive(exportPath, outputDirectory);
  console.log(`Generated ${result.levelCount} solutions in ${result.worldCount} worlds at ${basename(resolve(outputDirectory))}/`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
