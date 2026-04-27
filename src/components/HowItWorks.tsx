const STEPS = [
  {
    n: '1',
    title: 'Create Your RSI Account',
    body: 'Visit Roberts Space Industries and start a brand-new account. The referral system only applies to fresh accounts — existing accounts cannot retroactively claim a code.'
  },
  {
    n: '2',
    title: 'Enter Code STAR-GCQJ-N6NC',
    body: 'During signup, paste the referral code into the "Referral Code" field. You have a 24-hour window from account creation to apply the code — do not skip this step.'
  },
  {
    n: '3',
    title: 'Receive 50,000 UEC',
    body: 'After your first qualifying purchase (game package), the 50,000 UEC bonus is credited to your hangar. Spend it on components, weapons, armor, or save it for in-game.'
  }
];

export default function HowItWorks() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {STEPS.map((s) => (
        <div
          key={s.n}
          className="relative bg-charcoalMid border border-white/5 rounded-xl p-6 hover:border-gold/40 transition-colors"
        >
          <div className="absolute -top-3 -left-3 w-10 h-10 flex items-center justify-center rounded-full bg-gold text-charcoal font-display font-bold text-lg shadow-gold">
            {s.n}
          </div>
          <h3 className="font-display text-lg text-platinum mt-2 mb-2">{s.title}</h3>
          <p className="text-platinum/70 text-sm leading-relaxed">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
