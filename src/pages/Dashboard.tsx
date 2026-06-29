import {
  Bell,
  CircleHelp,
  Focus,
  Grid2X2,
  LineChart,
  PlusCircle,
  Search,
  Settings,
  Shield,
  Sprout,
  Users,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", Icon: Grid2X2, active: true },
  { label: "Focus", Icon: Focus },
  { label: "Community", Icon: Users },
  { label: "Insights", Icon: LineChart },
  { label: "Settings", Icon: Settings },
];

const Dashboard = () => (
  <main className="flex min-h-screen bg-[#fbfbf8] text-on-surface">
    <aside className="hidden w-64 shrink-0 border-r border-outline/10 bg-white p-6 md:flex md:flex-col">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-eight bg-primary text-white">
          <Sprout size={28} />
        </span>
        <div>
          <p className="text-3xl font-bold text-primary">Reclaim</p>
          <p className="text-xs uppercase tracking-[0.28em] text-outline">
            Serene Transformation
          </p>
        </div>
      </div>

      <nav className="mt-14 space-y-3">
        {menuItems.map(({ label, Icon, active }) => (
          <button
            key={label}
            type="button"
            className={`flex w-full items-center gap-4 rounded-eight px-4 py-3 text-left font-bold ${
              active
                ? "bg-primary-container text-primary"
                : "text-on-surface-variant hover:bg-surface"
            }`}
          >
            <Icon size={22} />
            {label}
          </button>
        ))}
      </nav>

      <button
        type="button"
        className="mt-auto rounded-eight bg-primary px-6 py-3 font-bold text-white"
      >
        Start Session
      </button>
    </aside>

    <section className="flex-1 p-6 md:p-10">
      <header className="flex items-center justify-between gap-6">
        <label className="flex w-full max-w-sm items-center gap-3 rounded-full border border-outline/10 bg-white px-4 py-3 text-outline">
          <Search size={20} />
          <input
            className="w-full bg-transparent outline-none"
            placeholder="Search insights..."
          />
        </label>
        <div className="flex items-center gap-5 text-on-surface-variant">
          <Bell size={22} />
          <CircleHelp size={22} />
          <div className="h-10 w-10 rounded-full bg-emerald-900/70" />
        </div>
      </header>

      <div className="mt-12">
        <h1 className="text-5xl font-bold text-on-surface">Good morning.</h1>
        <p className="mt-4 text-lg text-on-surface-variant">
          Here is your progress towards a serene mind today.
        </p>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[18px] bg-white p-8 shadow-sm ring-1 ring-outline/10 lg:row-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-on-surface-variant">
              Focus Score
            </p>
            <div className="mx-auto mt-20 flex h-48 w-48 items-center justify-center rounded-full border-[14px] border-primary">
              <p className="text-center text-5xl font-bold text-primary">
                89
                <span className="block text-sm text-on-surface-variant">
                  / 100
                </span>
              </p>
            </div>
            <p className="mx-auto mt-8 w-fit rounded-eight bg-emerald-100 px-4 py-2 font-bold text-emerald-700">
              +4 from yesterday
            </p>
          </div>

          <SmallStat title="Time Saved Today" value="2h 15m" helper="12% above average" />
          <SmallStat title="Current Streak" value="12 Days" helper="Consistency is key." />
        </section>

        <section className="grid gap-6">
          <div className="rounded-[18px] bg-gradient-to-br from-slate-700 to-slate-500 p-8 text-white shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-container">
              Reclaim AI Coach
            </p>
            <p className="mt-8 text-xl leading-8">
              "You're most focused between 9 AM and 11 AM. Ready for today's
              session?"
            </p>
            <button className="mt-8 rounded-eight bg-primary px-5 py-3 font-bold">
              Start Deep Work
            </button>
          </div>

          <div className="rounded-[18px] bg-white p-8 shadow-sm ring-1 ring-outline/10">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                Blocked Attempts
              </p>
              <Shield className="text-emerald-700" />
            </div>
            <p className="mt-10 text-5xl text-on-surface">42</p>
            <p className="mt-2 text-on-surface-variant">distractions avoided</p>
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.65fr]">
        <div className="rounded-[18px] bg-white p-8 shadow-sm ring-1 ring-outline/10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-on-surface-variant">
            Weekly Recovery
          </p>
          <p className="mt-3 text-lg text-on-surface">Focus Hours</p>
          <div className="mt-10 h-52 rounded-eight bg-gradient-to-t from-primary/10 to-transparent">
            <div className="flex h-full items-end gap-4 px-4 pb-5">
              {[18, 35, 58, 42, 86, 66, 95].map((height) => (
                <span
                  key={height}
                  className="flex-1 rounded-t-full bg-primary"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[18px] bg-white p-8 shadow-sm ring-1 ring-outline/10">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-on-surface-variant">
              Goals Progress
            </p>
            <PlusCircle className="text-primary" />
          </div>
          <div className="mt-8 space-y-6">
            <Goal label="Read 20 pages" value="12 / 20" progress="60%" />
            <Goal label="1h Deep Work" value="45 / 60m" progress="75%" />
            <Goal label="Morning Walk" value="Done" progress="100%" done />
          </div>
        </div>
      </div>
    </section>
  </main>
);

const SmallStat = ({
  title,
  value,
  helper,
}: {
  title: string;
  value: string;
  helper: string;
}) => (
  <div className="rounded-[18px] bg-white p-8 shadow-sm ring-1 ring-outline/10">
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-on-surface-variant">
      {title}
    </p>
    <p className="mt-20 text-4xl text-on-surface">{value}</p>
    <p className="mt-2 text-emerald-700">{helper}</p>
  </div>
);

const Goal = ({
  label,
  value,
  progress,
  done,
}: {
  label: string;
  value: string;
  progress: string;
  done?: boolean;
}) => (
  <div>
    <div className="flex justify-between gap-4 text-sm">
      <p className={done ? "line-through text-outline" : "text-on-surface"}>
        {label}
      </p>
      <p className={done ? "text-emerald-700" : "text-on-surface-variant"}>
        {value}
      </p>
    </div>
    <div className="mt-3 h-2 rounded-full bg-secondary-container">
      <div
        className={`h-full rounded-full ${done ? "bg-emerald-700" : "bg-primary"}`}
        style={{ width: progress }}
      />
    </div>
  </div>
);

export default Dashboard;
