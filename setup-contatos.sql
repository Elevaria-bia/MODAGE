-- ============================================================
--  MODAS GE — TABELA DE CONTATOS (newsletter / clube)
--  Rode no SQL Editor do Supabase para ativar a captação de
--  e-mails do site. Os contatos aparecem no painel em "Contatos".
-- ============================================================

create table if not exists leads (
  id         bigint generated always as identity primary key,
  email      text not null,
  source     text default '',
  created_at timestamptz default now()
);

alter table leads enable row level security;

-- Visitante do site pode cadastrar o e-mail (inserir)
create policy "inserir lead publico" on leads
  for insert with check (true);

-- Só quem está logado no painel pode VER a lista
create policy "ler leads autenticado" on leads
  for select to authenticated using (true);
