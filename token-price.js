#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Token Price
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 💰
// @raycast.argument1 { "type": "text", "placeholder": "Symbol ex: btc" }

// Documentation:
// @raycast.description formats a Cloudflare image URL
// @raycast.author gfarrisi
// @raycast.authorURL https://raycast.com/gfarrisi
import axios from "axios";
import clipboard from "clipboardy";

const BASE_URL = "https://api.coingecko.com/api/v3";

const input = process.argv.slice(2)[0];
const symbol = input.toLowerCase();

export const symbolMap = {
  btc: "bitcoin",
  eth: "ethereum",
  op: "optimism",
  bonsai: "bonsai",
  bnb: "binancecoin",
  ada: "cardano",
  doge: "dogecoin",
  xrp: "ripple",
  sol: "solana",
  dot: "polkadot",
  ltc: "litecoin",
  link: "chainlink",
  xlm: "stellar",
  vet: "vechain",
  matic: "polygon",
  shib: "shiba-inu",
  uni: "uniswap",
  aave: "aave",
  comp: "compound",
  sushi: "sushi",
  yfi: "yearn-finance",
  crv: "curve-dao-token",
  snx: "synthetix-network-token",
  sushiswap: "sushi",
  lunr: "lunr-token",
};

const url = `${BASE_URL}/simple/price?ids=${symbolMap[symbol]}&vs_currencies=usd`;
axios
  .get(url)
  .then(async (res) => {
    const data = await res.data;
    const usd = data[symbolMap[symbol]].usd;
    const formattedUsd = `$${usd.toLocaleString()}`;
    clipboard.writeSync(formattedUsd);
    console.log(
      `${symbolMap[symbol]
        .toUpperCase()
        .replace("-", " ")}: ${formattedUsd} - Copied to clipboard `
    );
  })
  .catch((err) => {
    console.log("Invalid symbol");
  });
