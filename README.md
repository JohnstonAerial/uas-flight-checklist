 UAS Flight Checklists

A free, mobile-friendly Part 107 preflight checklist (can be used for recreational pilots too) web app with live weather conditions built in. No app to download, no subscription required — just open it in any browser and fly.

**Live Demo:** [checklist.johnstonaerial.com](https://checklist.johnstonaerial.com)

---

## Features

- **3 mission-specific tabs** — General, Mapping, and Commercial
- **Live Preflight Conditions panel** showing:
  - Wind speed, gusts, and direction arrow
  - Cloud ceiling in feet AGL from nearest METAR station
  - Temperature and visibility
  - KP Index (space weather / GPS interference risk)
  - Sunrise and sunset times
- **One-tap buttons** for TFRs, NOTAMs, and NWS Radar
- **Progress tracker** — percentage complete per tab
- **Works on any device** — phone, tablet, desktop, or dedicated controller screen
- **Completely free** to host and run

---

## Setup

**Live weather works out of the box — no account or API key needed.** Wind, gusts, wind at 400 ft, temperature, visibility, sunrise/sunset, and KP index all load automatically.

### Optional — real cloud ceiling (CheckWX)

Cloud ceiling in feet AGL comes from real METAR reports via CheckWX. Without a key, the Cloud Ceiling tile shows "No METAR data" and everything else still works.

1. Sign up free at [checkwx.com](https://checkwx.com) (key activates immediately)
2. Open `index.html` in a text editor and find this line near the bottom:

```javascript
const CHECKWX_KEY = 'YOUR_CHECKWX_KEY_HERE';
```

3. Replace `YOUR_CHECKWX_KEY_HERE` with your key.

Note: on a public GitHub repo the key is visible in the source. The CheckWX free tier has no billing attached, so the risk is limited to someone using up your quota. To keep it private, route the METAR request through a free Cloudflare Worker that adds the key server-side.

### Host it

The simplest way is GitHub Pages:

1. Fork this repo
2. Go to **Settings → Pages → Source → main branch** → Save
3. Your checklist will be live at `yourusername.github.io/uas-flight-checklist`

Or simply download `index.html` and open it locally in any browser. The weather panel won't work on local `file://` URLs due to browser security restrictions — you'll need it hosted on HTTPS (GitHub Pages is free and perfect for this).

---

## How to Use

1. Open the checklist on your device before your flight
2. Select the tab that matches your mission type
3. Review the **Preflight Conditions** panel — tap **↻ Refresh** to update weather
4. Check off each item as you complete it
5. The progress bar tracks your completion percentage
6. Tap **Reset** to clear all checks for your next flight

---

## Limitations

- **No cross-device sync** — checked items only persist on the device and browser you're using. If you start the checklist on your computer at home and then open it on your phone in the field, it will start fresh. Plan to use a single device per flight.
- **No account or login** — by design. Keeps it simple, private, and free.
- **Weather is location-based** — the Preflight Conditions panel pulls data for your current GPS location when you open it. It does not pull weather for a planned job site in a different location. Use the **Radar — NWS** button to check conditions at a distant destination.
- **Cloud ceiling needs an optional CheckWX key** — all other weather works with no key.
- **Altitude and speed limits** — defaults shown are US FAA limits. Always verify the regulations for your country and airspace class.

---

## Customization

This is a single HTML file — everything is in `index.html`. You can:

- Add your own company name and branding in the header
- Add or remove checklist items to match your operation
- Add additional tabs for mission types specific to your work
- Adjust the weather color thresholds to match your personal minimums

---

## Built With

- Vanilla HTML, CSS, and JavaScript — no frameworks or dependencies
- [Open-Meteo](https://open-meteo.com) — wind, gusts, wind at 400 ft, temperature, visibility, sunrise/sunset (no key required)
- [CheckWX API](https://checkwx.com) — METAR cloud ceiling data (optional free key)
- [NOAA Space Weather](https://services.swpc.noaa.gov) — KP Index (no key required)
- [aviationweather.gov](https://aviationweather.gov) — TFR and NOTAM links
- Hosted free on [GitHub Pages](https://pages.github.com)
- Weather proxy via [Cloudflare Workers](https://workers.cloudflare.com)

---

## Credits

Originally built by **Johnston Aerial** — FAA Part 107 certified commercial drone pilot based in Johnston County, North Carolina.

[www.johnstonaerial.com](https://www.johnstonaerial.com) · [YouTube](https://www.youtube.com/@JohnstonAerial)

---

## License

MIT License — free to use, modify, and share. A credit back to Johnston Aerial is appreciated but not required.
