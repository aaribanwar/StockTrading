// fetchTopIndia.js
// Usage: FMP_KEY=yourkey node fetchTopIndia.js
const axios = require("axios");

const FMP_BASE = "https://financialmodelingprep.com/stable";
const API_KEY = process.env.FMP_KEY || "KSbY4gXBrvptYvCwuaR8x6FNSKx9Jddx";
if (!API_KEY) {
  console.error("Set FMP_KEY env var before running (export FMP_KEY=...)");
  process.exit(1);
}

// 1) your curated list (edit as needed)
const topIndianCompanies = [
  "RELIANCE.NS",
  "TCS.NS",
  "INFY.NS",
  "HDFCBANK.NS",
  "ICICIBANK.NS",
  "HINDUNILVR.NS",
  "SBIN.NS",
  "BHARTIARTL.NS",
  "ASIANPAINT.NS",
  "BAJFINANCE.NS"
];

// config
const BATCH_SIZE = 4;         // number of symbols to fetch in parallel per batch
const BATCH_DELAY_MS = 600;   // pause between batches to avoid bursting
const MAX_RETRIES = 3;        // per-request retry attempts

function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

async function fetchWithRetry(url, retries = MAX_RETRIES) {
  let attempt = 0;
  while (attempt <= retries) {
    try {
      const res = await axios.get(url, { timeout: 10000 });
      return res.data;
    } catch (err) {
      attempt++;
      const isLast = attempt > retries;
      const status = err?.response?.status;
      // For 4xx permanent errors don't retry (except 429 maybe)
      if (status && status >= 400 && status < 500 && status !== 429) {
        throw err;
      }
      if (isLast) throw err;
      const backoff = 200 * attempt * attempt; // quadratic backoff
      await sleep(backoff);
    }
  }
}

function normalize(profileArr, quoteArr) {
  const profile = Array.isArray(profileArr) ? profileArr[0] : profileArr;
  const quote = Array.isArray(quoteArr) ? quoteArr[0] : quoteArr;
  return {
    symbol: profile?.symbol ?? quote?.symbol ?? null,
    name: profile?.companyName ?? profile?.name ?? null,
    exchange: profile?.exchange ?? null,
    currency: profile?.currency ?? null,
    ltp: (quote && (quote.price ?? quote.c ?? quote?.last)) ? Number(quote.price ?? quote.c ?? quote.last) : null,
    change: Number(quote?.change ?? quote?.chg ?? profile?.change ?? 0),
    changePercent: Number(quote?.changesPercentage ?? quote?.changePercentage ?? 0),
    marketCap: profile?.marketCap ?? quote?.marketCap ?? null,
    logo: profile?.image ?? profile?.logo ?? null,
    profileRaw: profile,
    quoteRaw: quote
  };
}

async function fetchForSymbol(symbol) {
  const profUrl = `${FMP_BASE}/profile?symbol=${encodeURIComponent(symbol)}&apikey=${API_KEY}`;
  const quoteUrl = `${FMP_BASE}/quote?symbol=${encodeURIComponent(symbol)}&apikey=${API_KEY}`;

  const [profData, quoteData] = await Promise.all([
    fetchWithRetry(profUrl),
    fetchWithRetry(quoteUrl)
  ]);

  return normalize(profData, quoteData);
}

async function runAll() {
  const results = [];
  for (let i = 0; i < topIndianCompanies.length; i += BATCH_SIZE) {
    const chunk = topIndianCompanies.slice(i, i + BATCH_SIZE);
    // map fetches in parallel for the chunk
    const promises = chunk.map(sym =>
      fetchForSymbol(sym)
        .then(r => ({ ok: true, data: r }))
        .catch(err => ({ ok: false, symbol: sym, error: err?.response?.data ?? err.message ?? String(err) }))
    );
    const settled = await Promise.all(promises);
    // log each result and keep for later
    settled.forEach(s => {
      if (s.ok) {
        // Console log a compact, human-friendly object
        const out = {
          symbol: s.data.symbol,
          name: s.data.name,
          exchange: s.data.exchange,
          ltp: s.data.ltp,
          change: s.data.change,
          changePercent: s.data.changePercent,
          marketCap: s.data.marketCap,
          logo: s.data.logo
        };
        console.log(JSON.stringify({ success: true, stock: out }, null, 2));
        results.push(s.data);
      } else {
        console.warn(JSON.stringify({ success: false, symbol: s.symbol, err: s.error }, null, 2));
      }
    });

    // pause between batches
    if (i + BATCH_SIZE < topIndianCompanies.length) {
      await sleep(BATCH_DELAY_MS);
    }
  }
  return results;
}

(async () => {
  try {
    const all = await runAll();
    console.log("--- finished; fetched items:", all.length);
    // optionally: do something with `all` (save to cache, send to DB, etc.)
  } catch (e) {
    console.error("Fatal error:", e?.response?.data ?? e.message ?? e);
  }
})();
