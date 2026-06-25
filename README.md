# Modas GE — Site Catálogo

> Langery · Moda Feminina · Masculina · Infantil

Site catálogo estilo editorial Vogue para a **Modas GE**, desenvolvido pela [ELEVARIA](https://elevaria.com.br).

## 🚀 Stack

- HTML5 semântico
- CSS3 com variáveis (Design Tokens)
- JavaScript vanilla (sem frameworks)
- **Supabase** — banco de produtos + armazenamento de fotos (CDN) + login do admin
- Deploy: GitHub Pages

## 🛠 Como a loja é alimentada

A dona cadastra produtos pelo painel **`admin.html`** (login por e-mail/senha).
Tudo é salvo no **Supabase** e aparece **na hora** no catálogo, para todos os
clientes — sem precisar publicar nada nem mexer em código.

> **Configuração inicial (uma vez):** siga o **[SETUP-SUPABASE.md](SETUP-SUPABASE.md)**.
> Depois é só usar o painel.

Arquivos-chave:
- `js/supabase-config.js` — as 2 chaves do projeto Supabase
- `js/store.js` — camada de dados (`window.MG.*`) usada por todas as páginas
- `seed-exemplo.sql` — produtos de exemplo opcionais

## 📁 Estrutura

```
modas-ge/
├── index.html              → Homepage editorial
├── catalogo.html           → Catálogo com filtros (lê do Supabase)
├── admin.html              → Painel da dona (cadastro de produtos)
├── js/
│   ├── supabase-config.js  → Chaves do projeto Supabase
│   └── store.js            → Camada de dados (window.MG.*)
├── css/
│   ├── tokens.css          → Design tokens (cores, tipografia)
│   ├── base.css            → Reset e estilos base
│   └── components.css      → Componentes UI
├── SETUP-SUPABASE.md       → Passo a passo de configuração
├── seed-exemplo.sql        → Produtos de exemplo (opcional)
└── assets/
    └── logo/               → Logo Modas GE
```

## 🎨 Design System

Cores principais:
- `#3D1C10` — Chocolate (principal)
- `#C9A84C` — Gold (destaque)
- `#D4A8A0` — Rose (aquarela)
- `#0D0D0D` — Noir (editorial)

## 📦 Deploy (GitHub Pages)

```bash
git add .
git commit -m "feat: site catálogo Modas GE"
git push origin main
```

Ativar GitHub Pages em: **Settings → Pages → Branch: main**

---
*Desenvolvido com ♥ pela ELEVARIA*
