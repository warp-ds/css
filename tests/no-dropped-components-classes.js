#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

/**
 * Validation script for backwards-compatible eik builds
 *
 * Validates that no CSS classes get removed from the built components.css compared to the current published version.
 */

const WARP_CSS_ALIAS = '~2';

// match .whatever{ in the whole string, but with "lazy" matching (?) on { so we get all the individual classes
const CSS_SELECTOR_RE = /\.[a-z-].+?{/g;

async function getPublishedComponentsCss() {
  const response = await fetch(`https://assets.finn.no/pkg/@warp-ds/css/${WARP_CSS_ALIAS}/components.css`);
  const contents = await response.text();
  console.log('Read current components.css from Eik');
  return contents;
}

async function getBuiltComponentsCss() {
  const contents = await readFile(join(rootDir, 'dist', 'components.css'), 'utf-8');
  console.log('Read components.css from dist/');
  return contents;
}

/** @param {string} contents */
function getListOfCssClasses(contents) {
  // Matches will be an array of selectors spanning from the first . up to and including to the opening {,
  // for example .h3,.h4{
  const matches = [...contents.matchAll(CSS_SELECTOR_RE)];

  // Massage the list of selectors to an array of class selectors like [".h3", ".h4"]
  const cssClasses = matches.flatMap((match) => {
    const bracketlessString = match[0].replace('{', '');

    // Handle the case where a custom property (including an escaped comma!) was
    // part of a selector by only splitting on commas followed by the start of a class selector
    const individualClassSelectors = bracketlessString.split(',.');

    // Ensure all class selectors start with a . post split
    return individualClassSelectors.map((classSelector) => {
      if (classSelector.startsWith('.')) return classSelector;
      return `.${classSelector}`;
    });
  });

  return cssClasses;
}

const existingClassSelectors = getListOfCssClasses(await getPublishedComponentsCss());
const newClassSelectors = getListOfCssClasses(await getBuiltComponentsCss());

const missingSelectors = [];

for (const existing of existingClassSelectors) {
  const existingSelectorIncludedInCurrentBuild = newClassSelectors.includes(existing);
  if (existingSelectorIncludedInCurrentBuild) {
    continue;
  }
  missingSelectors.push(existing);
}

if (missingSelectors.length !== 0) {
  throw Error(`Current build is missing CSS selectors users may rely on from components.css!

Add the following classes to backwardsCompatibleClasses in component-classes/index.js:

${missingSelectors.join('\n')}`);
} else {
  console.log('No backwards compatibility issues found in components.css');
}
