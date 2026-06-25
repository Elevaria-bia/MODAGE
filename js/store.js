// ============================================================
//  MODAS GE — CAMADA DE DADOS (store.js)
//  A "ponte" entre o site e o Supabase. Tanto o catálogo
//  quanto o admin usam estas funções: window.MG.*
//  Requer:  supabase-js (CDN)  +  supabase-config.js
// ============================================================

(function () {
  const cfg = window.MG_CONFIG || {};
  window.MG = window.MG || {};

  const CAT_LABELS = {
    conjunto: 'Conjunto',
    sutia:    'Sutiã',
    calcinha: 'Calcinha',
    pijama:   'Pijama',
    camisola: 'Camisola'
  };
  window.MG.CAT_LABELS = CAT_LABELS;
  window.MG.CATEGORIES = Object.keys(CAT_LABELS);

  // Ainda não configurado? Avisa e segue com lista vazia (catálogo
  // mostra estado vazio em vez de quebrar).
  const ready = cfg.SUPABASE_URL &&
                cfg.SUPABASE_URL.indexOf('COLE_AQUI') === -1 &&
                window.supabase;
  window.MG.ready = !!ready;

  if (!ready) {
    console.warn('[Modas GE] Supabase ainda não configurado. Edite js/supabase-config.js (veja SETUP-SUPABASE.md).');
    window.MG.getProducts = async () => [];
    window.MG.getFeatured = async () => [];
    return;
  }

  const sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
  window.MG.sb = sb;

  // ── Conversão banco (snake_case) ⇄ site (camelCase) ──────
  function normalize(row) {
    return {
      id:            row.id,
      name:          row.name,
      category:      row.category,
      categoryLabel: CAT_LABELS[row.category] || row.category,
      price:         row.price != null ? Number(row.price) : null,
      priceOld:      row.price_old != null ? Number(row.price_old) : null,
      badge:         row.badge || null,
      description:   row.description || '',
      sizes:         Array.isArray(row.sizes)  ? row.sizes  : [],
      colors:        Array.isArray(row.colors) ? row.colors : [],
      images:        Array.isArray(row.images) ? row.images : [],
      inStock:       row.in_stock !== false,
      featured:      !!row.featured,
      sortOrder:     row.sort_order || 0
    };
  }
  function denormalize(p) {
    return {
      name:        (p.name || '').trim(),
      category:    p.category,
      price:       (p.price == null || p.price === '') ? null : Number(p.price),
      price_old:   p.priceOld != null && p.priceOld !== '' ? Number(p.priceOld) : null,
      badge:       p.badge || null,
      description: (p.description || '').trim(),
      sizes:       p.sizes || [],
      colors:      p.colors || [],
      images:      p.images || [],
      in_stock:    p.inStock !== false,
      featured:    !!p.featured,
      sort_order:  p.sortOrder || 0
    };
  }
  window.MG.normalize = normalize;

  // ── LEITURA (pública) ────────────────────────────────────
  window.MG.getProducts = async function () {
    const { data, error } = await sb
      .from('products')
      .select('*')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false });
    if (error) { console.error('[Modas GE] getProducts:', error.message); return []; }
    return (data || []).map(normalize);
  };

  window.MG.getFeatured = async function (limit = 8) {
    const { data, error } = await sb
      .from('products')
      .select('*')
      .eq('featured', true)
      .order('sort_order', { ascending: true })
      .limit(limit);
    if (error) { console.error('[Modas GE] getFeatured:', error.message); return []; }
    return (data || []).map(normalize);
  };

  // ── ESCRITA (exige login) ────────────────────────────────
  window.MG.saveProduct = async function (p) {
    const payload = denormalize(p);
    let res;
    if (p.id) {
      res = await sb.from('products').update(payload).eq('id', p.id).select().single();
    } else {
      res = await sb.from('products').insert(payload).select().single();
    }
    if (res.error) throw res.error;
    return normalize(res.data);
  };

  window.MG.deleteProduct = async function (id) {
    const { error } = await sb.from('products').delete().eq('id', id);
    if (error) throw error;
  };

  window.MG.setFeatured = async function (id, featured) {
    const { error } = await sb.from('products').update({ featured }).eq('id', id);
    if (error) throw error;
  };

  // ── IMAGENS (Storage / CDN) ──────────────────────────────
  window.MG.uploadImage = async function (file) {
    const ext  = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await sb.storage.from('produtos')
      .upload(path, file, { cacheControl: '3600', upsert: false });
    if (error) throw error;
    const { data } = sb.storage.from('produtos').getPublicUrl(path);
    return data.publicUrl;
  };

  // ── CAPTAÇÃO DE CLIENTES (newsletter) ────────────────────
  window.MG.saveLead = async function (email, source) {
    const { error } = await sb.from('leads')
      .insert({ email: (email || '').trim().toLowerCase(), source: source || '' });
    if (error) throw error;
  };
  window.MG.getLeads = async function () {
    const { data, error } = await sb.from('leads')
      .select('*').order('created_at', { ascending: false });
    if (error) { console.error('[Modas GE] getLeads:', error.message); return []; }
    return data || [];
  };

  // ── AUTENTICAÇÃO (admin) ─────────────────────────────────
  window.MG.login      = (email, password) => sb.auth.signInWithPassword({ email, password });
  window.MG.logout     = () => sb.auth.signOut();
  window.MG.getSession = async () => (await sb.auth.getSession()).data.session;
})();
