#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Uppercase
// @raycast.mode compact

// Optional parameters:
// @raycast.icon ⬆️
// @raycast.argument1 { "type": "text", "placeholder": "phrase" }

// Documentation:
// @raycast.description returns uppercase word or phrase
// @raycast.author gfarrisi
// @raycast.authorURL https://raycast.com/gfarrisi

import clipboard from "clipboardy";

const input = process.argv.slice(2)[0];
const uppercase = input.toUpperCase();
clipboard.writeSync(uppercase);
console.log(`Copied name to clipboard: ${uppercase}`);
