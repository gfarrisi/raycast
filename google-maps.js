#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Maps Search (Google)
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🗺️
// @raycast.argument1 { "type": "text", "placeholder": "Search query" }

// Documentation:
// @raycast.description Search for a place in Google Maps
// @raycast.author YourName
// @raycast.authorURL https://raycast.com/YourName

import { exec } from "child_process";

const searchQuery = encodeURIComponent(process.argv.slice(2)[0]);
const url = `https://www.google.com/maps/search/?api=1&query=${searchQuery}`;

exec(`open -a "Google Chrome" "${url}"`, (error) => {
  if (error) {
    console.error(`Error opening Google Maps: ${error}`);
    return;
  }
  console.log(`Searching for "${searchQuery}" in Google Maps`);
});
