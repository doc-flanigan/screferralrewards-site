const STEPS = [
  {
    n: '1',
    title: 'Create Your RSI Account',
    body: 'Visit Roberts Space Industries and start a brand-new account. The referral system only applies to fresh accounts — existing accounts cannot retroactively claim a code.'
  },
  {
    n: '2',
    title: 'Enter Code STAR-GCQJ-N6NC',
    body: 'During signup, paste the referral code into the "Referral Code" field. RSI also allows the code to be added retroactively within 24 hours of account creation, but applying it during signup ensures the bonus is credited immediately.'
  },
  {
    n: '3',
    title: 'Receive 50,000 UEC Automatically',
    body: 'Per the official RSI program, anyone registering with a referral code automatically receives 50,000 UEC — no purchase required. Spend it on components, weapons, armor, or save it as a trade float.'
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
