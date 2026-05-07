// ============================================================
//  MODAS GE — CATALOG.JS
//  Lê produtos do Admin (localStorage) com fallback para products.js
// ============================================================

(function () {
  const saved = localStorage.getItem('mg_products');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Sobrescreve o array global com os dados do admin
        window.PRODUCTS = parsed;
      }
    } catch (e) {
      console.warn('[Modas GE] Erro ao carregar produtos do admin:', e);
    }
  }
  // Settings do admin
  const settings = localStorage.getItem('mg_settings');
  if (settings) {
    try {
      window.MG_SETTINGS = JSON.parse(settings);
    } catch(e) {}
  }
})();
