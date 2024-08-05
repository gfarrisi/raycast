#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Convert: Date to Unix
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🕒
// @raycast.argument1 { "type": "text", "placeholder": "MM/DD/YYYY" }

// Documentation:
// @raycast.description converts date (MM/DD/YYYY) to Unix timestamp
// @raycast.author gfarrisi
// @raycast.authorURL https://raycast.com/gfarrisi

import clipboard from "clipboardy";

function dateToUnixTimestamp(dateString) {
  const [month, day, year] = dateString.split("/").map(Number);

  // Note: months are 0-indexed in JavaScript Date
  const date = new Date(year, month - 1, day);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format. Please use MM/DD/YYYY.");
  }

  // Convert to Unix timestamp (seconds since Unix Epoch)
  return date.getTime();
}

const input = process.argv.slice(2)[0];

try {
  const unixTimestamp = dateToUnixTimestamp(input);
  clipboard.writeSync(unixTimestamp.toString());
  console.log(`Copied Unix timestamp to clipboard: ${unixTimestamp}`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
