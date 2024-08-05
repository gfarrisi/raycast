#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Unix Now
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🕒

// Documentation:
// @raycast.description returns current unix timestamp
// @raycast.author gfarrisi
// @raycast.authorURL https://raycast.com/gfarrisi

import clipboard from "clipboardy";

const unix = Date.now();
clipboard.writeSync(unix.toString());
console.log(`Copied name to clipboard: ${unix.toString()}`);
