export type ReferralEvent = {
  name: string;
  startDate: string; // ISO
  endDate: string; // ISO
  reward: string;
  status: 'past' | 'live' | 'upcoming';
  note?: string;
};

// Pre-populated representative event history. Edit dates/rewards to match
// verified RSI announcements before launch.
export const REFERRAL_EVENTS: ReferralEvent[] = [
  {
    name: 'Anniversary 2024 — Bonus UEC Drive',
    startDate: '2024-11-22',
    endDate: '2024-12-02',
    reward: '75,000 UEC + exclusive paint',
    status: 'past',
    note: 'Promo doubled standard bonus during the Anniversary Sale window.'
  },
  {
    name: 'Invictus Launch Week 2025',
    startDate: '2025-05-23',
    endDate: '2025-06-02',
    reward: '100,000 UEC + ILW commemorative item',
    status: 'past',
    note: 'Tied to free-fly weekend; high recruitment volume reported.'
  },
  {
    name: 'CitizenCon 2025 — Recruit Drive',
    startDate: '2025-10-10',
    endDate: '2025-10-19',
    reward: '50,000 UEC + cosmetic helmet',
    status: 'past'
  },
  {
    name: 'Anniversary 2025 — IAE Referral Bonus',
    startDate: '2025-11-21',
    endDate: '2025-12-01',
    reward: '75,000 UEC + ship paint',
    status: 'past',
    note: 'Layered with IAE free-fly traffic.'
  },
  {
    name: 'Free Fly: Q1 2026',
    startDate: '2026-02-14',
    endDate: '2026-02-24',
    reward: '50,000 UEC standard bonus',
    status: 'past'
  },
  {
    name: 'Invictus Launch Week 2026 — Expected',
    startDate: '2026-05-22',
    endDate: '2026-06-01',
    reward: 'TBA — Expect 50,000–100,000 UEC bonus window',
    status: 'upcoming',
    note: 'Historical pattern; confirm via RSI Comm-Link closer to date.'
  }
];

export const STANDARD_BONUS = '50,000 UEC';
