export type ReferralEvent = {
  name: string;
  startDate: string; // ISO; for events without verified specific dates, use the first of the month
  endDate: string; // ISO
  reward: string;
  status: 'past' | 'live' | 'upcoming';
  note?: string;
  source?: string;
};

// Verified against Roberts Space Industries comm-link transmissions and the
// Star Citizen Wiki (starcitizen.tools). The standard 50,000 UEC bonus is
// always available and is NOT increased during these events — RSI instead
// grants an extra one-time ship/item to the recruiter (and sometimes the
// recruit) for a limited window. Confirm exact item details on the linked
// RSI comm-link before launch.

export const REFERRAL_EVENTS: ReferralEvent[] = [
  {
    name: 'Invictus Launch Week 2955 — Referral Bonus',
    startDate: '2025-05-15',
    endDate: '2025-05-27',
    reward: 'Kruger P-52 Merlin (recruiter)',
    status: 'past',
    note: 'Recruit a friend who pledges during ILW 2955 and earn a free Kruger P-52 Merlin. Standard 50,000 UEC bonus to the recruit is unchanged.',
    source:
      'https://robertsspaceindustries.com/en/comm-link/transmission/20580-Invictus-Launch-Week-2955-Referral-Bonus'
  },
  {
    name: 'IAE 2955 — Referral Bonus',
    startDate: '2025-11-20',
    endDate: '2025-12-03',
    reward: 'Drake Dragonfly "Star Kitten" Edition (recruiter)',
    status: 'past',
    note: 'Held at the Vision Center, Orison, Crusader. Standard 50,000 UEC bonus to the recruit is unchanged.',
    source:
      'https://robertsspaceindustries.com/en/comm-link/transmission/20867-IAE-2955-Referral-Bonus'
  },
  {
    name: 'Invictus Launch Week 2956 — Expected',
    startDate: '2026-05-15',
    endDate: '2026-05-27',
    reward: 'TBA — RSI typically announces 1–2 weeks before the event',
    status: 'upcoming',
    note: 'Expected based on the past Invictus cadence. Confirm via RSI Comm-Link closer to date.',
    source: 'https://robertsspaceindustries.com/en/comm-link?text=Referral+Bonus'
  }
];

// Standard new-recruit bonus, always available outside event windows.
export const STANDARD_BONUS = '50,000 UEC';
