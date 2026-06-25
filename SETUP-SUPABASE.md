# Configuração do Supabase — Modas GE

Passo a passo único (≈10 min). Depois disso a dona cadastra produtos do
celular e o site atualiza na hora, sem mexer em código.

---

## 1. Criar a conta e o projeto

1. Acesse **https://supabase.com** → **Start your project** → entre com o Google.
2. **New project**:
   - **Name:** `modas-ge`
   - **Database Password:** crie uma senha forte e **guarde** (não é a senha do admin do site).
   - **Region:** `South America (São Paulo)`
   - **Create new project** e espere ~2 min.

---

## 2. Criar a tabela e as regras (copiar e colar)

No menu lateral → **SQL Editor** → **New query** → cole tudo abaixo → **Run**:

```sql
-- Tabela de produtos
create table if not exists products (
  id          bigint generated always as identity primary key,
  name        text not null,
  category    text not null,
  price       numeric not null,
  price_old   numeric,
  badge       text,
  description text default '',
  sizes       jsonb default '[]'::jsonb,
  colors      jsonb default '[]'::jsonb,
  images      jsonb default '[]'::jsonb,
  in_stock    boolean default true,
  featured    boolean default false,
  sort_order  int default 0,
  created_at  timestamptz default now()
);

-- Segurança: liga RLS
alter table products enable row level security;

-- Qualquer pessoa pode LER o catálogo
create policy "leitura publica products" on products
  for select using (true);

-- Só quem está logado pode criar/editar/excluir
create policy "escrita autenticada products" on products
  for all to authenticated using (true) with check (true);

-- Bucket de imagens (CDN público)
insert into storage.buckets (id, name, public)
values ('produtos', 'produtos', true)
on conflict (id) do nothing;

create policy "imagens leitura publica" on storage.objects
  for select using (bucket_id = 'produtos');

create policy "imagens upload autenticado" on storage.objects
  for insert to authenticated with check (bucket_id = 'produtos');

create policy "imagens delete autenticado" on storage.objects
  for delete to authenticated using (bucket_id = 'produtos');
```

Deve aparecer **Success. No rows returned**.

> **Opcional — começar com produtos de exemplo:** abra uma nova query, cole o
> conteúdo do arquivo **`seed-exemplo.sql`** e clique **Run**. Isso cadastra 17
> produtos de lingerie de exemplo (sem foto) só pra você ver o catálogo
> funcionando na hora. Depois é só editar/excluir pelo painel.

---

## 3. Criar o login da dona

Menu lateral → **Authentication** → **Users** → **Add user** → **Create new user**:

- **Email:** o e-mail dela (ex: `modasge@gmail.com`)
- **Password:** a senha que ela vai usar pra entrar no painel
- Marque **Auto Confirm User** ✅
- **Create user**

> Esse é o login do painel `admin.html`. Pode criar mais de um usuário se precisar.

---

## 4. Pegar as 2 chaves do projeto

Menu lateral → **Project Settings** (engrenagem) → **API**:

- **Project URL** → ex: `https://abcdefgh.supabase.co`
- **Project API keys → `anon` `public`** → uma chave longa

---

## 5. Colar as chaves no site

Abra o arquivo **`js/supabase-config.js`** e substitua os dois valores:

```js
window.MG_CONFIG = {
  SUPABASE_URL:      'https://abcdefgh.supabase.co',  // sua Project URL
  SUPABASE_ANON_KEY: 'eyJhbGciOi...'                  // sua anon public key
};
```

Salve, faça o commit/push no GitHub e pronto. ✅

> **Pode me mandar essas 2 chaves aqui** que eu colo pra você e já deixo
> tudo publicado.

---

## Pronto. Como ela usa no dia a dia

1. Abre `seusite.com/admin.html` no celular
2. Entra com e-mail e senha
3. **+ Novo Produto** → preenche, tira/escolhe a foto → **Salvar**
4. O catálogo já mostra na hora, pra todos os clientes

Custo: **R$ 0** no plano grátis (500 MB de banco + 1 GB de fotos + 5 GB de
tráfego/mês — sobra muito pra uma loja).
