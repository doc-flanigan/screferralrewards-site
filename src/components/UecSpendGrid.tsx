const ITEMS = [
  {
    title: 'Ship Components',
    body: 'Quantum drives, shields, power plants — upgrade a starter loadout and gain real edge in combat or mining.'
  },
  {
    title: 'Personal Weapons',
    body: 'Mid-tier rifles, pistols, and sidearms. Replace defaults with optics-ready gear for FPS and bunker missions.'
  },
  {
    title: 'Armor Sets',
    body: 'Full medium armor sets with helmet, chest, undersuit. Survive depressurization and small-arms fire.'
  },
  {
    title: 'Consumables & Ammo',
    body: 'Stock medpens, oxygen pens, and ammo crates so a single mission failure does not wipe your inventory.'
  },
  {
    title: 'Vehicle Rentals',
    body: 'Try ground vehicles or fighters via in-game rental terminals before committing pledge money to a hull.'
  },
  {
    title: 'Cargo Trade Float',
    body: '50,000 UEC seeds your first trade run — flip commodities for profit instead of grinding bunkers.'
  }
];

export default function UecSpendGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {ITEMS.map((it) => (
        <div
          key={it.title}
          className="bg-charcoalMid border border-white/5 rounded-lg p-5 hover:border-gold/30 transition-colors"
        >
          <h3 className="font-display text-platinum text-base mb-1.5">{it.title}</h3>
          <p className="text-sm text-platinum/65 leading-relaxed">{it.body}</p>
        </div>
      ))}
    </div>
  );
}
