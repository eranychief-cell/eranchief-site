// Informational estimates only. The artwork price and payment request remain in ILS.
(() => {
  let rates;
  const estimate = (ils, currency) => new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(Math.round(ils / rates[currency].ilsPerUnit));
  function refresh() {
    if (!rates) return;
    document.querySelectorAll('[data-ils]').forEach(el => {
      const ils = Number(el.dataset.ils);
      if (!Number.isFinite(ils) || ils <= 0) return;
      el.textContent = `≈ ${estimate(ils, 'USD')} / ${estimate(ils, 'EUR')}`;
      el.title = `Approximate conversion using Bank of Israel reference rates (${rates.USD.updated?.slice(0, 10) || 'latest available'}). Payment is quoted in ILS; your payment provider may use a different rate.`;
    });
  }
  window.chiefRefreshCurrency = refresh;
  fetch('/api/fx').then(response => {
    if (!response.ok) throw new Error('Rates unavailable');
    return response.json();
  }).then(data => {
    rates = data.rates;
    refresh();
  }).catch(() => { /* Keep the exact ILS prices if reference rates are unavailable. */ });
})();
