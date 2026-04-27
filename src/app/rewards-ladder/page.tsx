import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import RewardsLadder from '@/components/RewardsLadder';
import SectionHeading from '@/components/SectionHeading';
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd';
import { REWARDS_LADDER } from '@/data/rewardsLadder';
import { REFERRAL_URL } from '@/data/referral';

export const metadata: Metadata = {
  title: 'Star Citizen Referral Rewards Ladder 2026 — All Tiers',
  description:
    'Full breakdown of the Star Citizen referral rewards ladder for 2026. Tier requirements, rewards at each level, and how to climb from Tier 0 to Master Recruiter.',
  alternates: { canonical: '/rewards-ladder' }
};

export default function RewardsLadderPage() {
  return (
    <main>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Rewards Ladder', url: '/rewards-ladder' }
        ]}
      />

      <section className="px-4 sm:px-6 pt-12 pb-10">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">For Veteran Backers</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl">
            Star Citizen Referral Rewards Ladder — <span className="text-gold">2026</span>
          </h1>
          <p className="text-platinum/75">
            Every successful recruit using your RSI referral code climbs you up the ladder.
            Cosmetics, paints, exclusive titles — here is the full structure.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <RewardsLadder />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 bg-charcoalMid/40 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Recruits To Next Tier"
            title="Quick Reference Table"
            subtitle="How many recruits separate each tier — useful for setting recruitment goals."
          />
          <div className="overflow-x-auto rounded-xl border border-white/5 bg-charcoalMid">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-widest text-platinum/50 border-b border-white/5">
                  <th className="px-4 py-3 font-medium">Tier</th>
                  <th className="px-4 py-3 font-medium">Recruits Required</th>
                  <th className="px-4 py-3 font-medium">Recruits to Next</th>
                  <th className="px-4 py-3 font-medium hidden sm:table-cell">Headline Reward</th>
                </tr>
              </thead>
              <tbody>
                {REWARDS_LADDER.map((tier, i) => {
                  const next = REWARDS_LADDER[i + 1];
                  const span = next ? next.recruits - tier.recruits : null;
                  return (
                    <tr
                      key={tier.tier}
                      className="border-b border-white/5 last:border-0"
                    >
                      <td className="px-4 py-3 font-mono text-gold">Tier {tier.tier}</td>
                      <td className="px-4 py-3 text-platinum">{tier.recruits}</td>
                      <td className="px-4 py-3 text-platinum/70">
                        {span ? `+${span}` : '—'}
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell text-platinum/80">
                        {tier.reward}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Legacy vs New Ladder"
            title="Why The Ladder Has Changed"
          />
          <div className="space-y-4 text-platinum/80 leading-relaxed">
            <p>
              RSI has revised the referral rewards structure multiple times since the original
              recruitment program launched. Earlier versions emphasized in-game ship rewards
              at lower tiers; the modern ladder leans toward cosmetics, paints, and titles —
              recognizing that ships are increasingly tied to pledge purchases rather than
              referral grinds.
            </p>
            <p>
              Veterans who hit Tier 4+ on the legacy ladder retain their grandfathered rewards
              even if the current structure offers different items at the same recruit count.
              If you are starting fresh in 2026, plan against the current ladder above.
            </p>
            <p className="text-sm text-platinum/55">
              For the authoritative reward list, always cross-check the official RSI referral
              program page before committing to a recruitment goal — CIG can update tier
              rewards without notice.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 bg-charcoalMid/40 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="How To Recruit"
            title="Share Your Own Referral Code"
            subtitle="Once you have an RSI account, your dashboard generates a unique recruitment URL. Here is how to share it effectively."
          />
          <div className="space-y-4 text-platinum/80 leading-relaxed">
            <p>
              <strong className="text-platinum">1. Find your code.</strong> Log in at
              robertsspaceindustries.com → Settings → Referral Program. Your code is the
              alphanumeric string after STAR-.
            </p>
            <p>
              <strong className="text-platinum">2. Share the full URL, not just the code.</strong>{' '}
              Recruits who click your URL get the code pre-filled at signup, which dramatically
              improves conversion vs. asking them to copy/paste manually.
            </p>
            <p>
              <strong className="text-platinum">3. Target free-fly windows.</strong> RSI runs
              free-fly events every few months — that is when curious players are most
              receptive to the pitch. Pair your share with the timing.
            </p>
            <p>
              <strong className="text-platinum">4. Be honest about the pitch.</strong> Tell
              them what they get (50,000 UEC + your bonus) and what they need (game package
              purchase). Players appreciate transparency over hype.
            </p>
          </div>
          <div className="mt-10 text-center">
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-gold hover:underline mr-4"
            >
              Use STAR-GCQJ-N6NC →
            </a>
            <Link href="/event-tracker" className="inline-block text-sm text-gold hover:underline">
              See upcoming bonus events →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            Climbing The Ladder Yourself? Start Here.
          </h2>
          <p className="text-platinum/70">
            Use the code yourself first to understand the new-recruit experience — then share
            confidently with friends.
          </p>
          <CTAButton />
        </div>
      </section>
    </main>
  );
}
