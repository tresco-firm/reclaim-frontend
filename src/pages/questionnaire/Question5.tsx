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
  {
    label: "Notifications",
    helper: "Reacting to buzzes and pings.",
    Icon: Bell,
  },
  {
    label: "Procrastination",
    helper: "Putting off important tasks.",
    Icon: TimerReset,
  },
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
    <div className="flex flex-col items-center w-full mx-auto text-center max-w-7xl">
      <h1 className="max-w-5xl mt-20 text-4xl font-bold leading-tight text-on-surface md:text-6xl">
        What usually triggers your scrolling?
      </h1>
      <p className="mt-8 text-lg leading-8 text-on-surface-variant md:text-2xl">
        Select all that apply. Understanding your triggers is the first step to
        mindful recovery.
      </p>

      <div className="grid w-full gap-8 mt-20 md:grid-cols-3">
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
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-surface text-primary">
                <Icon size={30} />
              </span>
              <span>
                <span className="block mt-10 text-3xl font-bold text-on-surface md:text-4xl">
                  {label}
                </span>
                <span className="block mt-4 text-xl text-on-surface-variant">
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
