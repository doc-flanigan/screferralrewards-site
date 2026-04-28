# screferralreward.com

> **Veteran-facing referral rewards site in the o7citizen.com portfolio**

Targets veteran Star Citizen players tracking their recruitment rewards and
climbing the referral ladder. Sister site
[screferralbonus.com](https://github.com/doc-flanigan/screferralbonus-site)
covers the new-player bonus/code intent on its own deploy.

## Referral Code
**STAR-GCQJ-N6NC**
https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC

## Funnel
screferralreward.com → rewards ladder + event tracker →
o7citizen.com → RSI signup

## Pages
- `/` — Referral code, UEC bonus, how-to
- `/get-the-code` — Step-by-step signup guide
- `/rewards-ladder` — Veteran recruitment tiers
- `/event-tracker` — Bonus event history + upcoming

## Tech Stack
Next.js 14 · TypeScript · Tailwind CSS · Vercel

## Setup
```bash
npm install && npm run dev
```

## Adding Bonus Event Data
Update `src/data/events.ts` when CIG announces a new referral bonus event.

## Domain Config
Add screferralreward.com under Vercel project → Domains.
(screferralbonus.com is a separate repo/deploy; do not alias it here.)

## Disclaimer
Unofficial fan site. Not affiliated with Cloud Imperium Games or Star Citizen.
FTC Disclosure: Referral links earn the site owner an in-game bonus reward.
