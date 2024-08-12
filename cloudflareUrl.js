#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Convert: Cloudflare Image URL
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🕒
// @raycast.argument1 { "type": "text", "placeholder": "9b64463e-934e-48ca-1ead-19a07b8b6600" }

// Documentation:
// @raycast.description formats a Cloudflare image URL
// @raycast.author gfarrisi
// @raycast.authorURL https://raycast.com/gfarrisi

import clipboard from "clipboardy";
import { config } from "dotenv";

config();

const cloudflareAccountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const input = process.argv.slice(2)[0];

const cloudflareUrl = `https://imagedelivery.net/${cloudflareAccountId}/${input}/public`;
clipboard.writeSync(cloudflareUrl);
console.log(`Copied url to clipboard: ${cloudflareUrl}`);
