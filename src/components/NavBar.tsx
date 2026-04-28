import Link from 'next/link';
import { HUB_URL } from '@/data/referral';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/get-the-code', label: 'Get the Code' },
  { href: '/event-tracker', label: 'Event Tracker' },
  { href: '/#faq', label: 'FAQ' }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-charcoal/85 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-block w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_#ffd700]" />
          <span className="font-display font-bold tracking-wide text-platinum group-hover:text-gold transition-colors">
            screferralrewards
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-platinum/80 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-platinum/60 hover:text-gold transition-colors"
            >
              o7citizen.com ↗
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
