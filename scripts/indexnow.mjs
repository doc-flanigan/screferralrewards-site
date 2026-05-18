// Submit all site URLs to Bing via IndexNow
// Usage: node scripts/indexnow.mjs
const KEY = '6ae2e4bad97ca4ddc5aea887553c3a41'
const HOST = 'screferralreward.com'
const urls = ['/', '/event-tracker', '/get-the-code'].map(p => `https://${HOST}${p}`)
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
})
res.ok ? console.log(`✅ ${urls.length} URLs submitted (HTTP ${res.status})`) : console.error(`❌ HTTP ${res.status}: ${await res.text()}`)
