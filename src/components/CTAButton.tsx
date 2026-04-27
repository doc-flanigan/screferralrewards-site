import { REFERRAL_URL } from '@/data/referral';

type Props = {
  label?: string;
  size?: 'md' | 'lg';
  className?: string;
};

export default function CTAButton({
  label = 'Claim Your 50,000 UEC Now',
  size = 'lg',
  className = ''
}: Props) {
  const sizing =
    size === 'lg'
      ? 'px-8 py-4 text-lg'
      : 'px-5 py-2.5 text-sm';

  return (
    <a
      href={REFERRAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md font-bold tracking-wide bg-gold text-charcoal hover:bg-goldDark transition-all hover:translate-y-[-1px] hover:shadow-gold ${sizing} ${className}`}
    >
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}
