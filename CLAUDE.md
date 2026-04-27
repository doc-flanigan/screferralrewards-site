# CLAUDE.md — screferralrewards.com

## Project Overview
Veteran-leaning conversion site in the portfolio. Targets players searching
"star citizen referral rewards" or "referral ladder" — backers tracking their
recruitment score and looking for ways to climb tiers. Also captures some
new-player traffic searching "star citizen referral code" but the primary
intent here is veteran/recruitment-focused.

Sister site: screferralbonus.com handles the pure new-player bonus intent
(separate repo: screferralbonus-site). Don't duplicate its content here.

## Agentic Build Instructions
Incremental agents only. Confirm each before proceeding.

### Agent 1 — Scaffold
- Next.js 14, TypeScript, Tailwind CSS, framer-motion
- Color palette:
    charcoal: '#111418'
    charcoalMid: '#1c2128'
    gold: '#ffd700'
    goldDark: '#ccac00'
    platinum: '#e8e8e8'
    muted: '#6b7280'
- Hero image placeholders (12 images)
- Made-by-community placeholder
- Confirm dev server

### Agent 2 — Components
- HeroCarousel.tsx (12 slides)
- ReferralCodeBox.tsx: prominent display of referral URL with copy-to-clipboard
  button. URL: https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
  Style: large, impossible to miss, gold bordered box
- CTAButton.tsx: "Claim Your 50,000 UEC Now"
- CountdownTimer.tsx: shows days/hours to next known event (with "No active
  event — standard 50,000 UEC bonus always available" fallback state)
- RewardsLadder.tsx: visual tier progression component
- EventHistoryTable.tsx: table of past referral bonus events with dates/rewards
- Footer.tsx: standard three-section footer
- NavBar.tsx: logo + links: Home, Get the Code, Rewards Ladder, Event Tracker,
  FAQ, o7citizen.com

### Agent 3 — Homepage (/)
Conversion-first layout. Referral code must be visible within first viewport.
  - SEO: title="Star Citizen Referral Code 2026 — Get 50,000 UEC Free"
    description="Use a Star Citizen referral code when you sign up to get
    50,000 free UEC. Code: STAR-GCQJ-N6NC. Updated for 2026."
  - ABOVE FOLD (no scrolling):
    * H1: "Get 50,000 UEC Free — Star Citizen Referral Code"
    * ReferralCodeBox: STAR-GCQJ-N6NC with copy button
    * CTAButton: "Create Account & Claim Bonus"
    * "⚠️ You have 24 hours after signup to enter a referral code" warning
  - HeroCarousel (below fold)
  - Sections:
    * "How the Referral Bonus Works" — 3 steps (Create account → Enter code →
      Get 50,000 UEC)
    * CountdownTimer for next bonus event
    * "What Can You Buy With 50,000 UEC?" — ship components, armor, etc.
    * Current bonus event details (placeholder with update instructions)
    * "For Veterans: Track Your Referral Rewards" → rewards ladder section
    * RewardsLadder component
    * EventHistoryTable
    * FAQ accordion (8 questions)
    * Final CTAButton
  - Footer
  Confirm full page renders correctly.

### Agent 4 — Get the Code Page (/get-the-code)
  - SEO: title="Star Citizen Referral Code STAR-GCQJ-N6NC — 50,000 UEC"
  - Step-by-step visual guide: how to enter referral code during signup
  - Screenshots placeholders with instructions
  - Large ReferralCodeBox
  - CTAButton
  - "What happens next" explainer

### Agent 5 — Rewards Ladder Page (/rewards-ladder)
  - SEO: title="Star Citizen Referral Rewards Ladder 2026 — All Tiers"
  - Full rewards ladder breakdown
  - "How many referrals to next tier" static reference table
  - Legacy vs new ladder explanation
  - "Recruit friends" guide with sharable referral link instructions
  - CTAButton

### Agent 6 — Event Tracker Page (/event-tracker)
  - SEO: title="Star Citizen Referral Bonus Events — History & Upcoming"
  - CountdownTimer
  - EventHistoryTable (pre-populated with 2024-2026 events from research)
  - "Set a reminder" section (link to newsletter on o7citizen.com)
  - CTAButton

### Agent 7 — SEO & Build
  - Sitemap, robots, OG/Twitter meta, canonical URLs
  - BreadcrumbList schema on all pages
  - npm run build must pass

## Referral Code
STAR-GCQJ-N6NC
Full URL: https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC

## Hub Link
https://o7citizen.com

## Color Palette
  --charcoal: #111418
  --charcoal-mid: #1c2128
  --gold: #ffd700
  --gold-dark: #ccac00
  --platinum: #e8e8e8
  --muted: #6b7280

## Footer Spec
1. Fan disclaimer
2. FTC: "Affiliate Disclosure: If you create a Star Citizen account using
   referral code STAR-GCQJ-N6NC, the site owner (Doc_Flanigan) will receive
   an in-game bonus reward. You still receive your full 50,000 UEC bonus."
3. RSI Fankit badge

## Commit Convention
feat/fix/seo/docs: [description]
