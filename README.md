# TawktoBlocker

TawktoBlocker is a small browser extension that prevents the Tawk.to chat widget from loading or showing notifications on websites. It’s lightweight, privacy-friendly, and works in Chromium-based browsers, Firefox, and Safari.

**Key points**

- Blocks the Tawk.to chat widget from injecting UI and playing notification sounds.
- Works automatically after installation -> no settings required.
- Compatible with Chrome, Edge, Brave, Opera, Firefox, and Safari.

## Installation

Chrome and Chromium-based browsers that support the Chrome Web Store:

- Install from the Chrome Web Store: https://chromewebstore.google.com/detail/tawkto-blocker/bjickhhflidiefkkeieogcpepincakga

If your browser does not support the Chrome Web Store, or if you want to install locally for development:

1. Download release.zip from the latest release
2. Unpack release.zip
3. Open the browser and go to the extensions page (e.g. `chrome://extensions/`).
4. Enable **Developer mode**.
5. Click **Load unpacked** and select the unpacked release

Firefox:

- Install from Mozilla Add-ons: https://addons.mozilla.org/en-US/firefox/addon/tawk-to-blocker/
- Or load temporarily for development: open `about:debugging#/runtime/this-firefox` → **Load Temporary Add-on** → select `manifest.json` from this folder.

Safari:

- Install from TestFlight: Soon

## Usage

Once installed, the extension runs silently and blocks Tawk.to code from creating the chat widget or playing notification sounds.

## Contributing

Contributions and bug reports are welcome. Please open an issue or submit a pull request with a clear description of the change.

## Support

Need help or have a question? Join our Discord community: https://discord.mest3rdevelopment.com

---

Made by SMmest3r
