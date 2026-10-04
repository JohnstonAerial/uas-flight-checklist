# How to use the UAS Flight Checklist

Short guides for three things people ask about: saving different setups ("profiles"), using the app with no signal, and using it outside the USA.

- [Make your own profiles](#make-your-own-profiles)
- [Use it with no signal](#use-it-with-no-signal)
- [Use it outside the USA](#use-it-outside-the-usa)

---

## Make your own profiles

The app keeps one setup at a time on your device: your tab names, which items are shown, items you added, your units and your saved places. A **backup file** is a snapshot of that setup. Keep one backup file per kind of job, and you can switch between them in a few taps.

**Example: a "Timelapse" setup**

1. Open **Settings & customize** and tap **✎ Customize list**.
2. Rename a tab (for example, **Timelapse**) in the **Tab name** box.
3. Tap **Hide** on items you don't need, and add your own at the bottom of any section. Use **Hide this tab** on tabs you don't want to see. Tap **✓ Done**.
4. In **💾 Back up & restore**, untick **Include current progress**, then tap **Save file**.
5. Rename the file so you can tell it apart, for example `uas-checklist-backup-TIMELAPSE.json`.

### What my Timelapse profile looks like

I shoot repeat timelapses: same spot, same flight path, session after session, so the frames line up when they're stacked together. The standard checklist is built for a one-off job, so I made a version just for this:

- I **renamed** one tab to **Timelapse**.
- I **hid the other two tabs**, so the app opens straight to this checklist.
- I **hid the standard items** on that tab and **added my own**, about 60 of them across the four sections.

Here is a sample of what I put in, to show the idea:

- **Before leaving home:** "Do NOT edit the saved waypoint mission. Create a second mission instead." And: "Check weather: fly at a consistent time of day when possible for matching light."
- **On site, before flight:**
  - "Launch from the EXACT same point every session. Use a physical marker (stake, spray paint, cone)."
  - "White balance: lock manually; must match previous sessions."
  - "Set MANUAL exposure before loading the mission. Record your values each session."
  - "Note the EV setting used on the last session and match it today."
  - "Confirm waypoint count matches previous sessions before arming."
- **During flight:** "Zoomed-in frame: note it for deletion." And: "Wrong lens active: scene noticeably wider or tighter than usual."
- **After:** "Review all images on the controller. Delete bad frames (wrong angle, zoom, very dark) now."

None of this is in the standard list, because it only matters for timelapse. That's why a separate profile works better than adding a dozen items you don't need on every other job.

I did the same thing for my other kinds of work: one backup file each for General, Mapping, Commercial, Timelapse and Production, each showing a single tab. Before a shoot I restore the one I need.

**Make yours:** start from whatever tab is closest to your work. Hide what you never use, add the checks you keep forgetting, and write them in your own words and for your own gear. The best items come from the mistakes you've already made once.

**To switch to it later:** open **Settings & customize**, tap **Restore from file…**, and choose the file. The page reloads with that setup.

**Good to know**

- **Restoring replaces everything on that device:** tabs, hidden and added items, units and saved places. If you want to keep your normal setup, save a backup of it first, before you start experimenting.
- **Untick "Include current progress"** when you save a profile. Otherwise it also saves which boxes you had ticked.
- **Copy code** gives you the same snapshot as text. Paste it into **Restore from code** on another phone, tablet or browser to move your setup across.
- **Where files go:** the file is saved to your phone's Files app, or your computer's downloads folder. Put your profile files somewhere you'll find them, such as a cloud folder.
- **Different devices keep their own settings.** A Home Screen icon on an iPhone has its own storage, separate from Safari, so restore the profile in the one you actually use.
- **Your files are yours.** They're plain text files that stay on your device or wherever you put them. Nothing is sent to the website.

---

## Use it with no signal

The checklist works with no signal. Once you've opened the app **once with a connection**, it stays ready:

- **Works offline:** the whole checklist, ticking items, your own items and tabs, and your saved settings.
- **Needs a connection:** live weather, radar, KP index, airport reports and place search. If there's no signal, the weather card says so and tells you to tap **Refresh** when you're back online.
- **Updates:** when you do have a signal, the app loads the newest version. With no signal it opens the last copy it loaded.

**Get it ready before a trip**

1. Open the app once while you have a signal (home Wi-Fi is fine).
2. Close it, switch on airplane mode, and open it again to check it loads.

**iPhone and iPad:** a Home Screen icon has its own storage, separate from Safari. If you use the icon, open it once with a signal as well.

Still worth doing: the checklist's own tip to screenshot your mission brief. The app is offline-ready, but your brief, airspace map and NOTAMs aren't.

---

## Use it outside the USA

The first time you open the app it asks **Where do you fly?** Choose **Outside the USA**. You can change this at any time from **Checklist for** under **Settings & customize**.

**What changes**

- **Units:** wind and distances show in km/h and km, temperatures in °C. The **mph · °F / km/h · °C** button next to the weather title switches units without changing your region.
- **Checklist wording:** the US-only items for TFRs and LAANC are hidden. The NOTAM and airspace items are reworded, so "Check airspace — use your country's drone airspace map or app" replaces the one about B4UFLY. The wind item shows km/h first.
- **Ceiling warnings:** low-cloud notes say "check your local cloud and visibility rules" instead of quoting US rules.
- **Night notice:** after sunset or before sunrise it says to check your local rules for night flying.
- **Place search:** you can search by town, postcode or ZIP code, or enter coordinates.

**What works worldwide**

- Forecast weather, wind, visibility, dew point and sunrise/sunset times.
- Radar, wherever RainViewer has coverage (the card tells you where it doesn't).
- Airport reports (METAR) from airports near you.
- The KP index.

**US-only buttons:** the **FAA TFRs**, **NOTAMs** and **NWS radar** buttons are hidden outside the USA.

**An honest limit:** this is a guide, not legal advice. The app doesn't know your country's drone rules. Check with your own aviation authority, such as Transport Canada, EASA or your national CAA, before you fly. Please also tell us which items don't fit where you fly. That feedback shapes the next version.
