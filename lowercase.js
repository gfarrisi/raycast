#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Lowercase
// @raycast.mode compact

// Optional parameters:
// @raycast.icon ⬇️
// @raycast.argument1 { "type": "text", "placeholder": "phrase" }

// Documentation:
// @raycast.description returns uppercase word or phrase
// @raycast.author gfarrisi
// @raycast.authorURL https://raycast.com/gfarrisi

import clipboard from "clipboardy";

const input = process.argv.slice(2)[0];
const lowercase = input.toLowerCase();
clipboard.writeSync(lowercase);
console.log(`Copied name to clipboard: ${lowercase}`);
