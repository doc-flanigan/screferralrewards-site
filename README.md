# screferralrewards.com / screferralbonus.com

> **Highest-conversion referral site in the o7citizen.com portfolio**

Targets both new players looking for a referral code and veteran players
tracking their recruitment rewards. Both screferralrewards.com and
screferralbonus.com point to this codebase.

## Referral Code
**STAR-GCQJ-N6NC**
https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC

## Funnel
screferralbonus.com / screferralrewards.com → code + explanation →
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
Both domains should be added in Vercel project settings under Domains.
Primary: screferralrewards.com
Alias: screferralbonus.com

## Disclaimer
Unofficial fan site. Not affiliated with Cloud Imperium Games or Star Citizen.
FTC Disclosure: Referral links earn the site owner an in-game bonus reward.
