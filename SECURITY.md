# Security Policy

## What this is

The UAS Flight Checklist is a single static web page. It has no server, no accounts and no database. Your ticks, notes, custom items and settings are stored only in your own browser (`localStorage`) on your own device. Nothing you type is sent to me.

The page does make a few outside requests: live weather and airport data, and a cookie-free visit counter (Cloudflare Web Analytics). The README lists the data sources.

## Reporting a problem

If you find a security problem, for example a way to run script through an added checklist item or link, or a way for one site to read another's saved data, please tell me privately first:

- Email **info@JohnstonAerial.com** with "Checklist security" in the subject.
- Include what you found, the steps to repeat it, and the browser and device.

Please don't post details in a public Issue until I've had a chance to fix it. I'm one person and this is a free tool, so I can't promise a timeline, but I read everything and will reply.

For ordinary bugs and suggestions, a public [Issue](https://github.com/JohnstonAerial/uas-flight-checklist/issues) is fine.

## Supported version

Only the current live version is supported. It's the one at https://checklist.johnstonaerial.com, and the version number is at the bottom of the page.
