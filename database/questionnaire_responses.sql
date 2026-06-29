create table if not exists public.questionnaire_responses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  email text not null unique,
  answers jsonb not null default '{}'::jsonb,
  screen_time_hours numeric(4, 1) not null,
  attention_apps text[] not null default '{}',
  phone_absence_feeling text not null default '',
  distraction_window text not null default '',
  scrolling_triggers text[] not null default '{}',
  habit_statement text not null default '',
  commitment_percent integer not null check (
    commitment_percent between 1 and 100
  ),
  reclaimed_time_uses text[] not null default '{}',
  focus_dream text not null default '',
  why_this_dream_matters text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.questionnaire_responses
  add column if not exists reclaimed_time_uses text[] not null default '{}',
  add column if not exists focus_dream text not null default '',
  add column if not exists why_this_dream_matters text not null default '';

alter table public.questionnaire_responses enable row level security;

create policy "Users can read their questionnaire response"
on public.questionnaire_responses
for select
to authenticated
using (user_id = auth.uid());

create policy "Users can create their questionnaire response"
on public.questionnaire_responses
for insert
to authenticated
with check (user_id = auth.uid() and email = auth.email());

create policy "Users can update their questionnaire response"
on public.questionnaire_responses
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid() and email = auth.email());
