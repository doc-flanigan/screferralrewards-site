// Submit all site URLs to Bing via IndexNow
// Usage: node scripts/indexnow.mjs

const KEY = '6ae2e4bad97ca4ddc5aea887553c3a41'
const HOST = 'screferralreward.com'

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/event-tracker`,
  `https://${HOST}/get-the-code`,
]

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
})

if (res.ok) {
  console.log(`✅ IndexNow: submitted ${urls.length} URLs (HTTP ${res.status})`)
} else {
  const body = await res.text()
  console.error(`❌ IndexNow failed: HTTP ${res.status} — ${body}`)
  process.exit(1)
}
