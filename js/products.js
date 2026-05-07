// ============================================================
//  MODAS GE — BASE DE PRODUTOS
//  Desenvolvido por ELEVARIA
// ============================================================

const PRODUCTS = [

  // ── LANGERY ─────────────────────────────────────────────
  {
    id: 1,
    name: "Conjunto Renda Premium",
    category: "langery",
    categoryLabel: "Langery",
    price: 149.90,
    priceOld: null,
    badge: "exclusive",
    badgeLabel: "Exclusivo",
    description: "Conjunto em renda delicada com acabamento premium. Disponível em cores nude, preto e rose.",
    sizes: ["P","M","G","GG"],
    colors: ["Nude","Preto","Rose"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Body Cetim Elegance",
    category: "langery",
    categoryLabel: "Langery",
    price: 129.90,
    priceOld: 179.90,
    badge: "sale",
    badgeLabel: "Sale",
    description: "Body em cetim com decote profundo e tiras reguláveis. Sofisticação para todos os momentos.",
    sizes: ["PP","P","M","G"],
    colors: ["Preto","Vinho","Marfim"],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Camisola Romântica",
    category: "langery",
    categoryLabel: "Langery",
    price: 99.90,
    priceOld: null,
    badge: "new",
    badgeLabel: "Novo",
    description: "Camisola fluida com bordados florais delicados. Para noites especiais.",
    sizes: ["P","M","G","GG"],
    colors: ["Branco","Rosa","Champagne"],
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "Kit Lua de Mel",
    category: "langery",
    categoryLabel: "Langery",
    price: 249.90,
    priceOld: 320.00,
    badge: "exclusive",
    badgeLabel: "Exclusivo",
    description: "Kit completo com camisola, roupão e pantufas. O presente perfeito.",
    sizes: ["Único"],
    colors: ["Rose Gold","Branco"],
    inStock: true,
    featured: true
  },

  // ── MODA FEMININA ─────────────────────────────────────────
  {
    id: 5,
    name: "Vestido Midi Floral",
    category: "feminina",
    categoryLabel: "Moda Feminina",
    price: 189.90,
    priceOld: 259.90,
    badge: "sale",
    badgeLabel: "Sale −27%",
    description: "Vestido midi com estampa floral romântica. Tecido leve e fluido, ideal para ocasiões especiais.",
    sizes: ["PP","P","M","G","GG"],
    colors: ["Floral Rosa","Floral Azul"],
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Blazer Alfaiataria",
    category: "feminina",
    categoryLabel: "Moda Feminina",
    price: 279.90,
    priceOld: null,
    badge: "new",
    badgeLabel: "Novo",
    description: "Blazer em alfaiataria estruturada. Versátil para o dia a dia e ocasiões formais.",
    sizes: ["P","M","G","GG"],
    colors: ["Preto","Caramelo","Off-White"],
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "Calça Wide Leg",
    category: "feminina",
    categoryLabel: "Moda Feminina",
    price: 169.90,
    priceOld: null,
    badge: null,
    badgeLabel: null,
    description: "Calça wide leg de cintura alta. Conforto e estilo em um só look.",
    sizes: ["36","38","40","42","44"],
    colors: ["Preto","Camel","Branco"],
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Conjunto Linho Premium",
    category: "feminina",
    categoryLabel: "Moda Feminina",
    price: 329.90,
    priceOld: 420.00,
    badge: "sale",
    badgeLabel: "Sale",
    description: "Conjunto camisa + calça em linho natural. Elegância com leveza para o verão.",
    sizes: ["P","M","G","GG"],
    colors: ["Bege","Branco","Sage"],
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: "Vestido Festa Bordado",
    category: "feminina",
    categoryLabel: "Moda Feminina",
    price: 459.90,
    priceOld: null,
    badge: "exclusive",
    badgeLabel: "Exclusivo",
    description: "Vestido longo com bordados artesanais dourados. Peça única para ocasiões especiais.",
    sizes: ["P","M","G"],
    colors: ["Preto/Dourado","Marinho/Dourado"],
    inStock: true,
    featured: true
  },

  // ── MODA MASCULINA ────────────────────────────────────────
  {
    id: 10,
    name: "Camisa Social Slim",
    category: "masculina",
    categoryLabel: "Moda Masculina",
    price: 129.90,
    priceOld: null,
    badge: "new",
    badgeLabel: "Novo",
    description: "Camisa social em algodão premium, corte slim fit. Para o executivo moderno.",
    sizes: ["P","M","G","GG","XG"],
    colors: ["Branco","Azul Claro","Cinza"],
    inStock: true,
    featured: true
  },
  {
    id: 11,
    name: "Calça Alfaiataria Masculina",
    category: "masculina",
    categoryLabel: "Moda Masculina",
    price: 199.90,
    priceOld: 259.90,
    badge: "sale",
    badgeLabel: "Sale",
    description: "Calça de alfaiataria clássica com corte reto. Versátil e elegante.",
    sizes: ["38","40","42","44","46","48"],
    colors: ["Preto","Marinho","Grafite"],
    inStock: true,
    featured: false
  },
  {
    id: 12,
    name: "Polo Premium Masculina",
    category: "masculina",
    categoryLabel: "Moda Masculina",
    price: 89.90,
    priceOld: null,
    badge: null,
    badgeLabel: null,
    description: "Polo em piquet com bordado exclusivo Modas GE. Conforto e estilo casual.",
    sizes: ["P","M","G","GG","XG"],
    colors: ["Branco","Preto","Vinho","Azul"],
    inStock: true,
    featured: true
  },
  {
    id: 13,
    name: "Terno Completo Elegance",
    category: "masculina",
    categoryLabel: "Moda Masculina",
    price: 699.90,
    priceOld: 899.90,
    badge: "exclusive",
    badgeLabel: "Exclusivo",
    description: "Terno completo (paletó + calça) em tecido italiano. Para o homem que não abre mão da elegância.",
    sizes: ["42","44","46","48","50"],
    colors: ["Preto","Marinho Escuro","Cinza Chumbo"],
    inStock: true,
    featured: true
  },

  // ── MODA INFANTIL ─────────────────────────────────────────
  {
    id: 14,
    name: "Vestido Princesa",
    category: "infantil",
    categoryLabel: "Moda Infantil",
    price: 79.90,
    priceOld: 119.90,
    badge: "sale",
    badgeLabel: "Sale −33%",
    description: "Vestido de festa com camadas de tule e laço. Para a princesinha do papai.",
    sizes: ["1","2","3","4","6","8"],
    colors: ["Rosa","Lilás","Branco"],
    inStock: true,
    featured: true
  },
  {
    id: 15,
    name: "Conjunto Bebê Premium",
    category: "infantil",
    categoryLabel: "Moda Infantil",
    price: 69.90,
    priceOld: null,
    badge: "new",
    badgeLabel: "Novo",
    description: "Conjunto body + calça em algodão 100% orgânico. Suave para a pele do bebê.",
    sizes: ["RN","0-3m","3-6m","6-9m","9-12m"],
    colors: ["Branco","Rosa Bebê","Azul Bebê","Amarelo"],
    inStock: true,
    featured: true
  },
  {
    id: 16,
    name: "Conjunto Esportivo Infantil",
    category: "infantil",
    categoryLabel: "Moda Infantil",
    price: 89.90,
    priceOld: null,
    badge: null,
    badgeLabel: null,
    description: "Conjunto moletom com capuz + calça. Para as crianças cheias de energia.",
    sizes: ["2","4","6","8","10","12"],
    colors: ["Azul/Branco","Preto/Dourado","Rosa/Cinza"],
    inStock: true,
    featured: false
  },
  {
    id: 17,
    name: "Roupa Aniversário",
    category: "infantil",
    categoryLabel: "Moda Infantil",
    price: 139.90,
    priceOld: 179.90,
    badge: "exclusive",
    badgeLabel: "Exclusivo",
    description: "Roupa especial para o dia mais importante do ano! Com bordado personalizado.",
    sizes: ["1","2","3","4","5","6"],
    colors: ["Rosa/Dourado","Azul/Dourado","Branco/Dourado"],
    inStock: true,
    featured: true
  }
];

// ── HELPERS ────────────────────────────────────────────────

function getProductsByCategory(cat) {
  if (cat === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === cat);
}

function getFeaturedProducts(limit = 8) {
  return PRODUCTS.filter(p => p.featured).slice(0, limit);
}

function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.categoryLabel.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}

function formatPrice(price) {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function getDiscount(price, priceOld) {
  if (!priceOld) return null;
  return Math.round((1 - price / priceOld) * 100);
}

const CATEGORIES = [
  { id: 'all',       label: 'Todos' },
  { id: 'langery',   label: 'Langery ✦' },
  { id: 'feminina',  label: 'Feminina' },
  { id: 'masculina', label: 'Masculina' },
  { id: 'infantil',  label: 'Infantil' }
];
