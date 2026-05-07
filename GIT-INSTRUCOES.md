# 🚀 Modas GE — Instruções Git & Deploy

## 1. Primeiro commit local (rode na pasta MODA GE)

Abra o **terminal** (CMD ou PowerShell) dentro da pasta, ou use o **VS Code**:

```bash
cd "C:\Users\crixs\OneDrive\Área de Trabalho\Fabiana\MODA GE"

git init
git branch -m master main
git add .
git commit -m "🎨 feat: site catálogo Modas GE v1.0 — Design System + Homepage + Catálogo"
```

---

## 2. Criar repositório no GitHub

1. Acesse **github.com** → clique em **"New repository"**
2. Nome sugerido: `modas-ge`
3. Visibilidade: **Public** (necessário para GitHub Pages grátis)
4. **NÃO** marque "Add README" (já temos)
5. Clique em **"Create repository"**

---

## 3. Conectar e subir o código

```bash
git remote add origin https://github.com/SEU_USUARIO/modas-ge.git
git push -u origin main
```

---

## 4. Ativar GitHub Pages

1. No repositório, clique em **Settings**
2. No menu lateral, clique em **Pages**
3. Em "Source" selecione: **Deploy from a branch**
4. Branch: **main** → Folder: **/ (root)**
5. Clique em **Save**

Aguarde ~2 minutos. Seu site estará em:
```
https://SEU_USUARIO.github.io/modas-ge/
```

---

## 5. Atualizar o site (workflow diário)

Toda vez que editar algum arquivo:

```bash
git add .
git commit -m "✏️ update: descrição da mudança"
git push
```

O GitHub Pages atualiza automaticamente em ~1 minuto!

---

## 6. Como adicionar a logo

1. Salve a logo em: `assets/logo/logo-modas-ge.png`
2. No `index.html` e `catalogo.html`, descomente a linha:
   ```html
   <img src="assets/logo/logo-modas-ge.png" alt="Modas GE" class="navbar__logo-img">
   ```
3. Comente ou remova a linha com o texto `navbar__logo-text`
4. Faça commit e push

---

## 📁 Estrutura do Projeto

```
MODA GE/
├── index.html          → Homepage editorial Vogue
├── catalogo.html       → Catálogo com filtros
├── css/
│   ├── tokens.css      → Design tokens (cores, tipografia)
│   ├── base.css        → Reset + tipografia base
│   └── components.css  → Componentes UI
├── js/
│   └── products.js     → Base de dados de produtos
├── assets/
│   ├── logo/           → ← COLOQUE A LOGO AQUI
│   └── images/         → ← COLOQUE FOTOS DOS PRODUTOS AQUI
└── README.md
```

---

*Desenvolvido com ♥ pela **ELEVARIA***
