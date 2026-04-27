export type LadderTier = {
  tier: number;
  recruits: number;
  reward: string;
  detail: string;
};

// Representative referral tiers based on RSI's published recruitment ladder.
// Verify against current RSI rewards page before launch — CIG can update at any time.
export const REWARDS_LADDER: LadderTier[] = [
  {
    tier: 0,
    recruits: 1,
    reward: 'Recruit Badge',
    detail: 'Forum badge + cumulative UEC bonus on every successful recruit.'
  },
  {
    tier: 1,
    recruits: 5,
    reward: 'Tier 1 Reward Pack',
    detail: 'Cosmetic flair item + commemorative paint scheme.'
  },
  {
    tier: 2,
    recruits: 10,
    reward: 'Tier 2 Reward Pack',
    detail: 'Exclusive sidearm skin + additional UEC.'
  },
  {
    tier: 3,
    recruits: 25,
    reward: 'Tier 3 Reward Pack',
    detail: 'Recruiter helmet variant + commendation.'
  },
  {
    tier: 4,
    recruits: 50,
    reward: 'Tier 4 Reward Pack',
    detail: 'Vehicle paint scheme + exclusive flight suit.'
  },
  {
    tier: 5,
    recruits: 100,
    reward: 'Tier 5 Reward Pack',
    detail: 'Limited Recruiter ship variant or capital component voucher.'
  },
  {
    tier: 6,
    recruits: 250,
    reward: 'Master Recruiter',
    detail: 'Engraved title, hangar plaque, and recognition pack.'
  }
];
