export type ReferralEvent = {
  name: string;
  startDate: string; // ISO
  endDate: string; // ISO
  reward: string; // What the new player (recruit) receives
  status: 'past' | 'live' | 'upcoming';
  note?: string;
  source?: string;
};

// All entries describe the event from the new-player's perspective — what
// signing up with a referral code during this window actually gets you. The
// 50,000 UEC referral bonus is the standard amount granted to anyone using
// any referral code at signup; during these event windows that bonus is
// paired with free-fly access, which is the real reason to time your signup
// to one of these dates.
//
// Verified against RSI Comm-Link transmissions (see source URLs) and the
// Star Citizen Wiki (starcitizen.tools).

export const REFERRAL_EVENTS: ReferralEvent[] = [
  {
    name: 'Invictus Launch Week 2955',
    startDate: '2025-05-15',
    endDate: '2025-05-27',
    reward: '50,000 UEC + free-fly access',
    status: 'past',
    note: 'Annual UEE Navy showcase. Free-fly window let new accounts play most ships at no cost — sign up with a referral code during this window and the standard 50,000 UEC bonus credits immediately, no game package required to start flying.',
    source:
      'https://robertsspaceindustries.com/en/comm-link/transmission/20580-Invictus-Launch-Week-2955-Referral-Bonus'
  },
  {
    name: 'IAE 2955 — Intergalactic Aerospace Expo',
    startDate: '2025-11-20',
    endDate: '2025-12-03',
    reward: '50,000 UEC + free-fly access to ~200 ships',
    status: 'past',
    note: 'Largest annual Star Citizen event. Nearly 200 flyable and drivable vehicles open to all players during the window; new accounts that signed up with a referral code received the standard 50,000 UEC bonus and could test the full lineup with no purchase needed.',
    source:
      'https://robertsspaceindustries.com/en/comm-link/transmission/20867-IAE-2955-Referral-Bonus'
  },
  {
    name: 'Invictus Launch Week 2956 — Expected',
    startDate: '2026-05-15',
    endDate: '2026-05-27',
    reward: '50,000 UEC + free-fly access (expected)',
    status: 'upcoming',
    note: 'Expected based on RSI’s historical Invictus cadence. Plan to sign up during this window for the standard 50,000 UEC bonus paired with free-fly access — final dates and any extra perks confirmed via RSI Comm-Link closer to the event.',
    source: 'https://robertsspaceindustries.com/en/comm-link?text=Referral+Bonus'
  }
];

// Standard new-recruit bonus — always available outside event windows.
export const STANDARD_BONUS = '50,000 UEC';
