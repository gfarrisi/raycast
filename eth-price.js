#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title ETH Price
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 💰

// Documentation:
// @raycast.description returns current unix timestamp
// @raycast.author gfarrisi
// @raycast.authorURL https://raycast.com/gfarrisi
import axios from "axios";
import clipboard from "clipboardy";

let ethPrice;

const BASE_URL = "https://api.coingecko.com/api/v3";
// const BASE_URL = "https://pro-api.coingecko.com/api/v3";

const url = `${BASE_URL}/simple/price?ids=ethereum&vs_currencies=usd`;
axios
  .get(url)
  .then(async (res) => {
    const data = await res.data;
    const usd = data.ethereum.usd;
    const formattedUsd = `$${usd.toLocaleString()}`;
    clipboard.writeSync(formattedUsd);
    console.log(`Copied to clipboard: ${formattedUsd}`);
  })
  .catch((err) => {
    console.log("Invalid address");
  });

// clipboard.writeSync(unix.toString());
// console.log(`Copied name to clipboard: ${unix.toString()}`);
