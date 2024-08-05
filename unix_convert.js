#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Convert: Unix to Date
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🕒
// @raycast.argument1 { "type": "text", "placeholder": "timestamp" }

// Documentation:
// @raycast.description converts Unix timestamp to readable date and time
// @raycast.author gfarrisi
// @raycast.authorURL https://raycast.com/gfarrisi

import clipboard from "clipboardy";

function formatDateTime(timestamp) {
  const date = new Date(timestamp);

  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  return `${month}/${day}/${year} ${hours}:${minutes}${ampm}`;
}

const input = process.argv.slice(2)[0];
const timestamp = parseInt(input);

// Check if the input is a valid number
if (isNaN(timestamp)) {
  console.error("Invalid input. Please provide a valid Unix timestamp.");
  process.exit(1);
}

const formattedDateTime = formatDateTime(timestamp);

clipboard.writeSync(formattedDateTime);
console.log(`Copied date to clipboard: ${formattedDateTime}`);
