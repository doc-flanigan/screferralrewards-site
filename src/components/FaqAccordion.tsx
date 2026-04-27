import { FAQ_ITEMS } from '@/data/faq';

export default function FaqAccordion() {
  return (
    <div className="space-y-2">
      {FAQ_ITEMS.map((item, i) => (
        <details
          key={i}
          className="group bg-charcoalMid border border-white/5 rounded-lg open:border-gold/40 transition-colors"
        >
          <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4">
            <span className="font-display text-platinum group-open:text-gold transition-colors">
              {item.q}
            </span>
            <span
              aria-hidden
              className="text-gold transition-transform group-open:rotate-45 text-xl"
            >
              +
            </span>
          </summary>
          <div className="px-5 pb-5 text-platinum/75 leading-relaxed">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
