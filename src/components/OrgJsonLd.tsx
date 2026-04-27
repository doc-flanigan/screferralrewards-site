import { SITE_URL } from '@/data/referral';

export default function OrgJsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'screferralrewards.com',
    url: SITE_URL,
    description:
      'Star Citizen referral code site — get 50,000 UEC bonus with code STAR-GCQJ-N6NC.',
    publisher: {
      '@type': 'Organization',
      name: 'Doc_Flanigan',
      url: 'https://o7citizen.com'
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
