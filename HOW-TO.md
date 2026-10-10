# How to use the UAS Flight Checklist

Short guides for seven things people ask about: backing up and restoring your setup, saving different setups ("profiles"), using the app with no signal, saving a record of your preflight, printing the checklist, using it outside the USA, and checking TFRs and NOTAMs (USA only).

- [Back up and restore your setup](#back-up-and-restore-your-setup)
- [Make your own profiles](#make-your-own-profiles)
- [Use it with no signal](#use-it-with-no-signal)
- [Save a flight record](#save-a-flight-record)
- [Print it and use a pencil](#print-it-and-use-a-pencil)
- [Use it outside the USA](#use-it-outside-the-usa)
- [Check TFRs and NOTAMs before you fly (USA only)](#check-tfrs-and-notams-before-you-fly-usa)

---

## Back up and restore your setup

Your checklist setup is stored on your device. If you get a new phone, clear your browser data, or want the same setup on a tablet, you'd have to rebuild it. A backup saves it so you can bring it back, or copy it to another device, in a minute.

**What a backup includes**

- Your tab names and icons, which tabs and items are hidden, the items you added, and the order you set
- Your units, your region (USA or another country) and your saved places
- Optionally, your current progress (the boxes you've ticked), which only restores if it hasn't expired (see Good to know)

It does not include saved flight records. Those are separate files that you keep yourself.

**To back up**

1. Tap **💾 Back up & restore** under the page header.
2. Leave **Include current progress** ticked if you're moving to another device today and want your ticks to come with you. Untick it to save only your setup, which is best for a backup you'll keep.
3. Tap **Save file**. On an iPhone or iPad the Share sheet opens, so you can choose **Save to Files** or send it to yourself. On a computer the file goes to your Downloads folder.

Or tap **Copy code**. The code is the same backup as text, handy for sending yourself a message.

**To restore**

- **From a file:** tap **Restore from file…** and choose your backup. The page reloads with that setup.
- **From a code:** paste it into the box, then tap **Restore from code**.

**Move your setup to another device**

Back up on the first device, send the file or code to the second (AirDrop, email, a cloud folder or a message to yourself), then restore it there.

**Good to know**

- **Progress expires, even in a backup.** Your ticks are kept for the time set under **Clear saved progress after** (12 hours unless you changed it), counted from the last time you ticked something. If you restore a backup after that time has passed, the app restores your setup, leaves the old ticks out and tells you the progress has expired. So a backup with progress works for moving to another device today, not for storing for later.
- **Restoring replaces everything on that device:** tabs, hidden and added items, units and saved places. If you want to keep what you have, save a backup of it first.
- **Each place keeps its own copy.** Safari and the Home Screen icon on the same iPhone store their settings separately. You can back up from one and restore into the other. That's an easy way to move to the Home Screen app.
- **You can restore on the same device too.** It's a quick way to undo a round of changes you regret, if you saved a backup first.
- **Reset and Restore original list are different.** **Reset** on the main screen clears only your ticks and flags on that tab. **Restore original list**, in the customize panel, undoes your customizing on that tab: hidden items come back, items you added are removed and the tab name and icon are reset.
- **Your files are yours.** They're plain text files that stay on your device or wherever you put them. Nothing is sent to the website.

---

## Make your own profiles

The app keeps one setup at a time on your device: your tab names and icons, which items are shown, items you added, your units and your saved places. A **backup file** is a snapshot of that setup. Keep one backup file per kind of job, and you can switch between them in a few taps.

**Example: a "Timelapse" setup**

1. Tap **⚙ Settings**, then **✎ Customize**.
2. Rename a tab (for example, **Timelapse**) in the **Tab name** box. You can also change its icon under **Tab icon**: pick one, type your own emoji, or choose **No icon**.
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

**To switch to it later:** tap **💾 Back up & restore**, then **Restore from file…**, and choose the file. The page reloads with that setup.

**Good to know**

- **Restoring replaces everything on that device:** tabs, hidden and added items, units and saved places. If you want to keep your normal setup, save a backup of it first, before you start experimenting.
- **Untick "Include current progress"** when you save a profile. Otherwise it also saves which boxes you had ticked.
- **Where files go and moving between devices:** see [Back up and restore your setup](#back-up-and-restore-your-setup). Put your profile files somewhere you'll find them, such as a cloud folder.
- **Your files are yours.** They're plain text files that stay on your device or wherever you put them. Nothing is sent to the website.

---

## Use it with no signal

The checklist works with no signal. Once you've opened the app **once with a connection**, it stays ready:

- **Works offline:** the whole checklist, ticking items, your own items and tabs, and your saved settings.
- **Needs a connection:** live weather, radar, KP index, airport reports and place search. With no signal, the weather card shows **📴 No signal** (with your last readings if it has them) and refreshes by itself when you're back online.
- **Updates:** when you do have a signal, the app loads the newest version. With no signal it opens the last copy it loaded.

**Get it ready before a trip**

1. Open the app once while you have a signal (home Wi-Fi is fine).
2. Close it, switch on airplane mode, and open it again to check it loads.

**iPhone and iPad:** a Home Screen icon has its own storage, separate from Safari. If you use the icon, open it once with a signal as well.

Still worth doing: the checklist's own tip to screenshot your mission brief. The app is offline-ready, but your brief, airspace map and NOTAMs aren't.

---

## Save a flight record

Want a copy of what you checked, plus the details of the flight? Tap **Save flight record**, on the right of the buttons at the top of the checklist (under **Print | PDF** on a narrow screen).

1. Tap **Save flight record**.
2. Fill in what you want to keep: the customer, the site (type an address or place name, or leave it blank) and any notes. **More details** has boxes for airspace authorization (for example a LAANC reference, altitude and times), flight time and visual observer. Everything is optional.
3. Choose whether to include the weather conditions, the items you didn't check, and your GPS coordinates (off unless you tick it).
4. Tap **Save PDF** or **Save text**. The one you used last is the filled button at the left of the row, and the app remembers it. PDF is the filled button until you choose text. On an iPhone or iPad the Share sheet opens, so you can choose **Save to Files**, AirDrop, Mail or Messages. On a computer the file goes to your Downloads folder.

You get one file, named like `flight-record-2026-10-06-1415-smith-roofing.pdf` (or `.txt` for text), that opens on any device. The PDF has real check boxes and page numbers. Items you flagged are listed as NEEDS ATTENTION. Items you hid are left out and items you added are included. The record is made on your device and isn't sent anywhere. To put your own name at the front of the file, such as `johnston-aerial`, type it in **Record file name starts with** at the bottom of **⚙ Settings**. The date, time and customer are still added.

Prefer to paste it into a note or email? Tap **Copy as text instead**. The record is copied to your clipboard and no file is made. That doesn't change which button is filled.

If the Share sheet doesn't open, the app shows a box with **Share…** and **Download** buttons instead.

---

## Print it and use a pencil

You can print the checklist and take it to the site. Open the tab you want, then tap **Print** in Safari. In the Home Screen app, open the page in Safari first, since the Home Screen app can't print. Check items off with a pencil during preflight and again after the flight. Print each tab you need, since only the open tab prints.

No printer, or using the Home Screen app? Tap **PDF** instead. It makes the same sheet as a PDF file, with your checked and flagged items marked and lines for date, time, site, pilot and visual observer, that you can save to Files, email or print later. It works in the Home Screen app too, and like printing it covers only the open tab.

The app also works offline once it has loaded (see above), so paper is a choice, not a requirement. You can also save a flight record afterward and print that.

---

## Use it outside the USA

The first time you open the app it asks **Where do you fly?** Choose **Outside USA**. You can change this at any time from **Where you fly** under **⚙ Settings**.

**What changes**

- **Units:** wind and distances show in km/h and km, temperatures in °C. The **mph · °F / km/h · °C** button next to the weather title switches units without changing your region.
- **Checklist wording:** the items marked "(US)" are hidden: the TFR check, the LAANC item and the TFR recheck on site. The NOTAM item is reworded to point you to your country's aviation authority or NOTAM service.
- **Ceiling warnings:** low-cloud notes say "check your local cloud and visibility rules" instead of quoting US rules.
- **Night notice:** after sunset or before sunrise it says to check your local rules for night flying.
- **Place search:** you can search by town, postal code (ZIP code in the USA), or enter coordinates.

**What works worldwide**

- Forecast weather, wind, visibility, dew point and sunrise/sunset times.
- Radar, wherever RainViewer has coverage (the card tells you where it doesn't).
- Airport reports (METAR) from airports near you.
- The KP index.

**US-only buttons:** the **FAA TFRs**, **NOTAMs** and **NWS radar** buttons are hidden outside the USA.

**An honest limit:** this is a guide, not legal advice. The app doesn't know your country's drone rules. Check with your own aviation authority, such as Transport Canada, EASA or your national CAA, before you fly. Please also tell us which items don't fit where you fly. That feedback shapes the next version.

---

## Check TFRs and NOTAMs before you fly (USA)

**This section is for flying in the USA only.** TFRs and NOTAMs here are the FAA's. Outside the USA the **TFRs**, **NOTAMs** and **NWS radar** buttons are hidden, so use your own country's aviation authority and drone airspace app instead (see [Use it outside the USA](#use-it-outside-the-usa)).

### TFRs

The **⚠️ TFRs** button opens the FAA's list for the whole country, so most of what you see will be far from you. To narrow it down:

1. In the left sidebar, open **Please select a state** and pick your state.
2. If nothing is listed, there are no TFRs in your state right now. If you fly near a border, check the neighboring state too.
3. Tap the **magnifier** icon next to an entry to see it on the map.
4. Read the **Type** column. VIP, Security, and Hazards (fires, for example) are the ones that matter for flying.

**Use a bigger view.** Both FAA sites (TFRs and NOTAMs) are built for a computer screen. If a link opens inside the app, open it in your browser instead. On iPhone, tap the compass icon. On Android, look for **Open in browser** (or **Open in Chrome**) in the menu. Then turn your phone sideways, since landscape gives the list and the map much more room.

**Easier on a phone: an FAA-approved airspace app.** The FAA's TFR list is built for a desktop screen. The FAA's B4UFLY service is delivered through FAA-approved apps from private companies, and these show airspace advisories, including TFRs, on a map around you. That's much easier to read at the launch site. Treat the map as a quick look, and still confirm against the FAA's current TFR and NOTAM pages, because an app can lag behind or miss a notice.

### Reading NOTAMs

Like the TFR page, the NOTAM search is easier to use in your browser with your phone turned sideways.

The **NOTAMs** button opens the FAA's NOTAM search. A few tips make it much less noisy:

1. **Search by airport code, not coordinates.** A coordinate search also returns center-wide notices for your whole region (for central NC they show as "ZDC"). Enter the codes of your nearest airports instead, such as the ones on the weather card, plus any airport near your job site.
2. **Use the free-text search** to find notices aimed at you. Try **UAS** or **drone**.
3. **Check the dates first.** Look at the start and end times before anything else, since many notices are expired or haven't started yet. Times are in UTC (Zulu), so convert them to your local time. For example, 1200Z is 8 AM Eastern daylight time.
4. **Know which notices matter to a small drone:**
   - Anything that starts with **FLIGHT RESTRICTIONS**. That's a TFR.
   - Anything mentioning **UAS** or **drones**.
   - **Obstructions** (OBST), such as cranes and towers, near your site.
   - **Airspace activity** such as parachute jumping, airshows, and military activity.
   - You can skip runway, taxiway, and navigation-aid notices. They matter to pilots at the airport, not to you.
5. **Learn the shorthand as you go.** SFC is ground level, AGL is above ground level, WI is within, and NM is nautical miles. "WI 3NM … SFC-400FT AGL" means within 3 nautical miles, from the ground up to 400 feet, which overlaps normal drone altitude.

A NOTAM search doesn't replace your airspace check (LAANC or your drone airspace app). It tells you about temporary changes. Always confirm against the FAA's current pages.
