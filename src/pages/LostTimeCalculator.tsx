import { useMemo, useState } from "react";
import { BookOpen, CalendarDays, GraduationCap, Info, Timer, Dumbbell } from "lucide-react";

const LostTimeCalculator = () => {
  const [dailyHours, setDailyHours] = useState(4);

  const metrics = useMemo(() => {
    const yearlyHours = dailyHours * 365;
    return {
      lifeYearsLost: (yearlyHours * 60) / (24 * 365),
      monthlyToll: dailyHours * 30,
      booksUnread: yearlyHours / 5,
      workoutsMissed: yearlyHours,
      skillsMastered: yearlyHours / 200,
    };
  }, [dailyHours]);

  return (
    <main className="bg-[#f7f5fd] px-6 py-10 md:px-20">
      <section className="mx-auto grid max-w-7xl gap-10 rounded-[28px] bg-surface p-8 md:grid-cols-[0.8fr_1.2fr] md:p-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold leading-tight text-on-surface md:text-6xl">
            The Cost of <span className="text-outline">Distraction</span>
          </h1>
          <p className="mt-8 max-w-xl text-2xl leading-9 text-on-surface-variant">
            Slide to calculate the hidden toll your screen time takes on your
            life's potential.
          </p>

          <div className="mt-16 rounded-[22px] bg-white p-10 shadow-sm ring-1 ring-outline/10">
            <p className="text-2xl font-bold text-on-surface">
              Daily phone time
            </p>
            <div className="mt-10 flex items-end justify-between">
              <span className="text-6xl font-bold text-primary">
                {dailyHours}
              </span>
              <span className="text-2xl text-on-surface-variant">
                hours / day
              </span>
            </div>
            <input
              aria-label="Daily phone time"
              type="range"
              min="1"
              max="12"
              value={dailyHours}
              onChange={(event) => setDailyHours(Number(event.target.value))}
              className="mt-10 h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary-container accent-primary"
            />
            <div className="mt-5 flex justify-between text-sm font-bold text-outline">
              <span>1h</span>
              <span>12h+</span>
            </div>
          </div>

          <div className="mt-16 flex gap-6 rounded-[22px] bg-white p-8 text-lg leading-8 text-on-surface-variant shadow-sm">
            <Info className="mt-1 shrink-0 text-primary" />
            <p>
              Even "productive" screen time fragments your attention. This
              calculator estimates the raw volume of time displaced from deep
              work, relationships, and rest.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="flex items-center justify-between rounded-[28px] bg-white p-10 shadow-sm ring-1 ring-outline/10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-outline">
                Potential life lost
              </p>
              <p className="mt-5 text-6xl font-bold text-[#ff9b3d]">
                {metrics.lifeYearsLost.toFixed(1)}
                <span className="ml-3 text-4xl">Yrs</span>
              </p>
              <p className="mt-5 max-w-xl text-xl leading-8 text-on-surface-variant">
                Assuming 60 more years of life, this is the time surrendered to
                your screen.
              </p>
            </div>
            <div className="hidden h-36 w-36 items-center justify-center rounded-full border-[12px] border-[#ff9b3d] text-outline md:flex">
              <Timer size={58} />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Metric
              Icon={CalendarDays}
              label="Monthly Toll"
              value={`${Math.round(metrics.monthlyToll)} hrs`}
              helper={`Equivalent to ${(metrics.monthlyToll / 40).toFixed(1)} standard work weeks lost every month.`}
              tone="blue"
            />
            <Metric
              Icon={BookOpen}
              label="Books Unread"
              value={`${Math.round(metrics.booksUnread)} / yr`}
              helper="At an average of 5 hours per book."
              tone="purple"
            />
            <Metric
              Icon={Dumbbell}
              label="Workouts Missed"
              value={`${Math.round(metrics.workoutsMissed).toLocaleString()} / yr`}
              helper="Assuming 1-hour sessions."
              tone="green"
            />
            <Metric
              Icon={GraduationCap}
              label="Skills Mastered"
              value={`${metrics.skillsMastered.toFixed(1)} / yr`}
              helper="Based on 200 hours to learn a new complex skill."
              tone="blue"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const Metric = ({
  Icon,
  label,
  value,
  helper,
  tone,
}: {
  Icon: typeof CalendarDays;
  label: string;
  value: string;
  helper: string;
  tone: "blue" | "purple" | "green";
}) => {
  const tones = {
    blue: "bg-primary/10 text-primary",
    purple: "bg-violet-100 text-violet-600",
    green: "bg-emerald-100 text-emerald-600",
  };

  return (
    <div className="rounded-[22px] bg-white p-8 shadow-sm ring-1 ring-outline/10">
      <div className="flex items-center gap-4">
        <span className={`flex h-12 w-12 items-center justify-center rounded-full ${tones[tone]}`}>
          <Icon size={24} />
        </span>
        <p className="text-lg font-bold text-on-surface">{label}</p>
      </div>
      <p className="mt-8 text-4xl font-bold text-on-surface">{value}</p>
      <p className="mt-4 text-lg leading-7 text-outline">{helper}</p>
    </div>
  );
};

export default LostTimeCalculator;
