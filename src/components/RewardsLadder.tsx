import { REWARDS_LADDER } from '@/data/rewardsLadder';

export default function RewardsLadder() {
  return (
    <div className="space-y-3">
      {REWARDS_LADDER.map((tier, i) => {
        const next = REWARDS_LADDER[i + 1];
        const span = next ? next.recruits - tier.recruits : null;
        return (
          <div
            key={tier.tier}
            className="grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-charcoalMid border border-white/5 hover:border-gold/40 rounded-lg p-4 sm:p-5 transition-colors"
          >
            <div className="flex flex-col items-center justify-center w-14 h-14 rounded-md bg-charcoal border border-gold/40">
              <span className="text-[10px] uppercase tracking-widest text-gold">Tier</span>
              <span className="font-display text-xl text-platinum">{tier.tier}</span>
            </div>
            <div>
              <p className="font-display text-lg text-platinum">{tier.reward}</p>
              <p className="text-sm text-platinum/60">{tier.detail}</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-gold text-lg">{tier.recruits}</p>
              <p className="text-[10px] uppercase tracking-widest text-platinum/50">
                {span ? `+${span} to next` : 'recruits'}
              </p>
            </div>
          </div>
        );
      })}
      <p className="text-xs text-platinum/40 text-center pt-2">
        Tier rewards reflect publicly known RSI structures and may change. Verify on the
        official RSI referral program page.
      </p>
    </div>
  );
}
