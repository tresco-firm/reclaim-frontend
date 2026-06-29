import {
  Bell,
  Hourglass,
  SearchX,
  Sparkles,
  TimerReset,
  Users,
  Workflow,
} from "lucide-react";

type Question5Props = {
  value: string[];
  onChange: (value: string[]) => void;
};

const options = [
  { label: "Boredom", helper: "Filling the gaps in my day.", Icon: Hourglass },
  { label: "Stress", helper: "Looking for a quick escape.", Icon: Sparkles },
  { label: "Loneliness", helper: "Seeking connection online.", Icon: SearchX },
  { label: "Notifications", helper: "Reacting to buzzes and pings.", Icon: Bell },
  { label: "Procrastination", helper: "Putting off important tasks.", Icon: TimerReset },
  { label: "FOMO", helper: "Fear of missing out.", Icon: Users },
  {
    label: "Avoiding Work",
    helper: "Ducking responsibilities or difficult conversations.",
    Icon: Workflow,
  },
];

const Question5 = ({ value, onChange }: Question5Props) => {
  const toggleOption = (option: string) => {
    onChange(
      value.includes(option)
        ? value.filter((item) => item !== option)
        : [...value, option],
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-on-surface-variant">
        Step 3 of 6
      </p>
      <h1 className="mt-20 max-w-5xl text-4xl font-bold leading-tight text-on-surface md:text-6xl">
        What usually triggers your scrolling?
      </h1>
      <p className="mt-8 text-lg leading-8 text-on-surface-variant md:text-2xl">
        Select all that apply. Understanding your triggers is the first step to
        mindful recovery.
      </p>

      <div className="mt-20 grid w-full gap-8 md:grid-cols-3">
        {options.map(({ label, helper, Icon }) => {
          const selected = value.includes(label);
          return (
            <button
              key={label}
              type="button"
              onClick={() => toggleOption(label)}
              className={`rounded-[22px] bg-white p-10 text-left shadow-[0_18px_55px_rgba(26,28,30,0.07)] transition hover:-translate-y-1 ${
                selected ? "ring-2 ring-primary" : "ring-1 ring-transparent"
              } ${label === "Avoiding Work" ? "md:col-span-3 md:flex md:items-center md:gap-8" : ""}`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-surface text-primary">
                <Icon size={30} />
              </span>
              <span>
                <span className="mt-10 block text-3xl font-bold text-on-surface md:text-4xl">
                  {label}
                </span>
                <span className="mt-4 block text-xl text-on-surface-variant">
                  {helper}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question5;
