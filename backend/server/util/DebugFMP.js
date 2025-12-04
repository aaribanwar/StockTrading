// DebugFMPQuote.js
const axios = require('axios');

const KEY = process.env.FMP_KEY || 'KSbY4gXBrvptYvCwuaR8x6FNSKx9Jddx'; // use same key you used in Thunder Client
const symbol = 'RELIANCE.NS';
const url = `https://financialmodelingprep.com/stable/quote?symbol=${encodeURIComponent(symbol)}&apikey=${KEY}`;

(async () => {
  try {
    console.log('Request URL:', url);
    const res = await axios.get(url, { timeout: 10000 });
    console.log('HTTP status:', res.status);
    console.log('Response body (first 1000 chars):\n', JSON.stringify(res.data).slice(0,1000));
    if (JSON.stringify(res.data).length < 2000) console.log('Full response:', JSON.stringify(res.data, null, 2));
  } catch (err) {
    const status = err?.response?.status;
    const data = err?.response?.data ?? err.message ?? String(err);
    console.log('ERROR status:', status);
    console.log('ERROR body:', typeof data === 'object' ? JSON.stringify(data, null, 2) : data);
  }
})();
