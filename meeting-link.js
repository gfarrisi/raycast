#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Hubspot Meeting Link
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🤝🏻

// Documentation:
// @raycast.description returns current unix timestamp
// @raycast.author gfarrisi
// @raycast.authorURL https://raycast.com/gfarrisi

import clipboard from "clipboardy";
import { exec } from "child_process";
import { config } from "dotenv";

config();

const meetingLink = process.env.HUBSPOT_MEETING_LINK;
clipboard.writeSync(meetingLink);

exec(`open -a "Google Chrome" "${meetingLink}"`, (error) => {
  if (error) {
    console.error(`Error opening Hubspot Link: ${error}`);
    return;
  }
  console.log(`Copied name to clipboard: ${meetingLink}`);
});

// console.log(unix);
