-- ============================================================
--  MODAS GE — PRODUTOS DE EXEMPLO (opcional)
--  Rode no SQL Editor do Supabase DEPOIS do setup principal
--  (SETUP-SUPABASE.md) para já ver o catálogo funcionando.
--  Pode excluir esses exemplos pelo painel admin quando quiser.
-- ============================================================

insert into products (name, category, price, price_old, badge, description, sizes, colors, featured) values
('Conjunto Renda Noite',      'conjunto', 189.90, 249.90, 'sale',      'Conjunto sutiã e calcinha em renda francesa.',            '["P","M","G","GG"]',                      '["Preto","Vinho","Nude"]',                 true),
('Conjunto Premium Cetim',    'conjunto', 219.90, null,   'exclusivo', 'Cetim italiano com bordado artesanal.',                   '["PP","P","M","G"]',                      '["Champagne","Rosa","Preto"]',             true),
('Conjunto Romântico Floral', 'conjunto', 149.90, null,   'novo',      'Conjunto com estampa floral bordada.',                    '["P","M","G","GG"]',                      '["Branco/Rose","Preto/Dourado"]',          true),
('Conjunto Body Tule',        'conjunto', 279.90, 380.00, 'sale',      'Body em tule com calcinha de renda.',                     '["P","M","G"]',                           '["Preto","Nude Escuro"]',                  false),
('Sutiã Bojo Rendado',        'sutia',    89.90,  119.90, 'sale',      'Bojo com renda delicada, regulagem de alça.',             '["34A","34B","36A","36B","36C","38B"]',   '["Preto","Nude","Rose","Vinho"]',          true),
('Sutiã Sem Aro Premium',     'sutia',    99.90,  null,   'novo',      'Sem aro com bojo em espuma. Conforto e sustentação.',     '["P","M","G","GG"]',                      '["Preto","Nude","Branco"]',                true),
('Sutiã Triangular Renda',    'sutia',    79.90,  null,   null,        'Triangular sem bojo. Renda italiana premium.',            '["PP","P","M","G"]',                      '["Rose","Branco","Preto"]',                false),
('Calcinha Fio Dental Luxo',  'calcinha', 49.90,  69.90,  'sale',      'Fio dental em renda com laço cetim.',                     '["PP","P","M","G","GG"]',                 '["Preto","Nude","Rose","Vinho","Branco"]', true),
('Calcinha Hot Pants Renda',  'calcinha', 59.90,  null,   'novo',      'Hot pants em renda com elástico invisível.',              '["P","M","G","GG"]',                      '["Preto","Rose","Bege"]',                  true),
('Calcinha Biquíni Premium',  'calcinha', 44.90,  null,   null,        'Biquíni em microfibra com renda.',                        '["PP","P","M","G","GG"]',                 '["Nude","Preto","Rose","Branco"]',         false),
('Kit 3 Calcinhas Básicas',   'calcinha', 99.90,  149.90, 'exclusivo', 'Kit com 3 calcinhas em cores básicas.',                   '["PP","P","M","G","GG"]',                 '["Kit Neutros","Kit Rosé","Kit Pretos"]',  true),
('Pijama Cetim Longo',        'pijama',   189.90, 239.90, 'sale',      'Pijama manga longa e calça em cetim.',                    '["P","M","G","GG"]',                      '["Champagne","Preto","Rosa Antigo"]',      true),
('Pijama Short Doll',         'pijama',   139.90, null,   'novo',      'Short + blusa de alça em cetim.',                         '["P","M","G","GG"]',                      '["Rose","Champagne","Preto","Lilás"]',     true),
('Pijama Floral Premium',     'pijama',   169.90, null,   null,        'Estampa floral suave em viscose macia.',                  '["P","M","G","GG","XG"]',                 '["Floral Rose","Floral Azul"]',            false),
('Camisola Maxi Luxo',        'camisola', 159.90, 199.90, 'sale',      'Camisola longa em chiffon com detalhes em renda.',        '["P","M","G","GG"]',                      '["Champagne","Rosa","Branco","Preto"]',    true),
('Baby Doll Renda',           'camisola', 119.90, null,   'exclusivo', 'Baby doll em renda com calcinha combinando.',             '["PP","P","M","G"]',                      '["Preto","Rose","Vinho"]',                 true),
('Camisola Romântica',        'camisola', 99.90,  null,   'novo',      'Camisola curta em cetim com bordado floral.',             '["P","M","G","GG"]',                      '["Branco","Rose","Champagne"]',            true);
