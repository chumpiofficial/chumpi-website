# CHUMPI Website

A simple, fast, editable static CHUMPI landing page.

## Files
- `index.html` — page text, sections and links
- `style.css` — design, colors and responsive layout
- `script.js` — contract address, Uniswap link and small interactions
- `assets/chumpi.png` — main CHUMPI image
- `assets/chump.png` — CHUMP image
- `assets/chumpi-taxi.png` — CHUMPI taxi scene
- `assets/chumpi-chef.png` — CHUMPI chef scene
- `assets/chumpi-postman.png` — CHUMPI postman scene
- `assets/chumpi-crane.png` — CHUMPI crane scene

## Current changes
- Hero keeps `GET $CHUMPI` and adds `BUY $CHUMPI ON UNISWAP` plus disabled `VIEW ON DEXSCREENER — COMING SOON`.
- Uniswap button opens in a new browser tab on Robinhood Chain with ETH as the input token. Until a contract address is added, the output token is left blank. After adding the contract address in `script.js`, it is automatically passed as `outputCurrency`.
- Removed the `MEET CHUMPI` button.
- Updated the `WHO IS CHUMPI?` text.
- Token network is `Robinhood Chain`; tax was removed.
- Added Creator, Marketing, Airdrop and Treasury wallet placeholders.
- Removed Telegram from Community.
- Added the four supplied CHUMPI Universe images.

## Before launch
1. Put the final contract address into `script.js`.
2. Add the real X/Twitter link.
3. Add the final DEX link when it exists.
4. Add the four wallet addresses.
5. Add the final Uniswap/DEX links if the routing needs any project-specific adjustment.
6. Connect your own domain.

The site is static and does not require a backend for the features above.
