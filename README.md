# UAS Flight Checklists

A free, mobile-friendly drone preflight checklist web app with live weather conditions built in. It works for recreational and commercial pilots in any country — hide the items that don't apply to you and add your own. No app to download, no subscription required — just open it in any browser and fly.

**Live Demo:** [checklist.johnstonaerial.com](https://checklist.johnstonaerial.com)

---

## Features

- **3 mission-specific tabs** — General, Mapping, and Commercial
- **Live Preflight Conditions panel** showing:
  - Wind speed, gusts, and direction arrow, plus wind at 400 ft
  - Cloud ceiling in feet AGL from nearest METAR station
  - Temperature and visibility
  - KP Index (space weather / GPS interference risk)
  - Sunrise and sunset times
- **Choose your flight site** — check weather for where you're going, not just where you are; recent sites are remembered on your device
- **One-tap buttons** for TFRs, NOTAMs, and NWS Radar
- **Progress tracker** — percentage complete per tab
- **Collapsible sections** — tap a section header to fold it up or open it, or use **Collapse all / Expand all**. Each header shows its count (like 9/12), a ✓ when it's finished and an amber ⚠ if something in it needs attention, even when folded. Your fold state is remembered
- **Customize the list** — tap **✎ Customize list** on any tab to hide items that don't apply where you fly (for example, services your country doesn't have) or add your own items to any section. Hidden items don't count toward progress. Your changes are saved on your device, and **Restore original list** puts the tab back to the defaults
- **Progress is saved on your device** — checks and flags survive a reload or an accidental app close, and expire so the next flight starts clean. The default is 12 hours; change it with the dropdown under the progress bar (1 hour, 4 hours, 12 hours, 24 hours or 3 days)
- **Imperial / metric toggle** — tap the units button in the weather panel to switch wind, temperature, visibility and ceiling between mph/°F/mi/ft and km/h/°C/km/m; your choice is remembered
- **Weather shows its age** — the "Updated" line turns amber after 30 minutes, and weather auto-refreshes when you return to the app after 10+ minutes
- **Flag items that need attention** — press and hold any item to mark it amber; flagged items don't count as complete until you resolve them
- **Works on any device** — phone, tablet, desktop, or dedicated controller screen
- **Completely free** to host and run

---

## Setup

**Live weather works out of the box — no account or API key needed.** Wind, gusts, wind at 400 ft, temperature, visibility, sunrise/sunset, cloud ceiling, and KP index all load automatically.

### Cloud ceiling (optional: run your own proxy)

Cloud ceiling comes from real METAR reports from the FAA/NWS [Aviation Weather Center](https://aviationweather.gov), which needs no key but blocks direct browser requests. The checklist reaches it through a tiny Cloudflare Worker (`uas-metar-worker.js` in this repo) that holds no secrets. This deployment already points at one, so a fork works as-is. To run your own:

1. Create a free [Cloudflare](https://cloudflare.com) account → **Workers & Pages → Create → Hello World**
2. Paste in the contents of `uas-metar-worker.js` and deploy
3. In `index.html`, set `METAR_PROXY` to your Worker's URL

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
3. Review the **Preflight Conditions** panel — tap **↻ Refresh** to update weather. It shows your current location by default; tap **Change** to look up a different flight site, and **Use my location** to switch back
4. Tap each item to check it off as you complete it
5. Press and hold an item to flag it as **needs attention** (amber). Tap a flagged item once it's resolved to check it off
6. The progress bar tracks your completion percentage and shows how many items need attention
7. Tap **Reset** (next to the progress bar) to clear all checks and flags on the current tab — it asks you to confirm first

---

## Limitations

- **No cross-device sync** — saved progress lives only in the browser on the device you're using (and is cleared when it expires or when you tap Reset). If you start on your computer and open the checklist on your phone, it will start fresh. Plan to use a single device per flight.
- **No account or login** — by design. Keeps it simple, private, and free.
- **Weather defaults to your current GPS location** — to check a different flight site, tap **Change** on the weather panel and search for a town, ZIP code, or coordinates. Place search works best for towns and cities; for a specific job site, use a nearby town or enter coordinates. Cloud ceiling comes from the nearest METAR station, which can be several miles from the site (the station is shown on the panel). The **Radar — NWS** button opens the national map.
- **Cloud ceiling depends on the METAR proxy** — if it is unreachable the Cloud Ceiling tile shows "No METAR data" and everything else still works.
- **Altitude and speed limits** — defaults shown are US FAA limits. Always verify the regulations for your country and airspace class, and use Customize to hide or replace items that don't match.

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
- [Aviation Weather Center](https://aviationweather.gov/data/api/) — METAR cloud ceiling (no key, via a small Cloudflare Worker)
- [NOAA Space Weather](https://services.swpc.noaa.gov) — KP Index (no key required)
- [aviationweather.gov](https://aviationweather.gov) — TFR and NOTAM links
- Hosted free on [GitHub Pages](https://pages.github.com)
- Weather proxy via [Cloudflare Workers](https://workers.cloudflare.com)

---

## Credits

Originally built by **Johnston Aerial** — FAA-certified commercial drone pilot based in Johnston County, North Carolina.

[www.johnstonaerial.com](https://www.johnstonaerial.com) · [YouTube](https://www.youtube.com/@JohnstonAerial)

---

## License

MIT License — free to use, modify, and share. A credit back to Johnston Aerial is appreciated but not required.
