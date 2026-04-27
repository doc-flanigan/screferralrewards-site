type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center'
}: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl mb-8 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-platinum">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-platinum/70 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
