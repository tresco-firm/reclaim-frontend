import { Moon, Sunrise, SunMedium, Sunset } from "lucide-react";

type Question4Props = {
  value: string;
  onChange: (value: string) => void;
};

const options = [
  { label: "Morning", Icon: Sunrise },
  { label: "Afternoon", Icon: SunMedium },
  { label: "Evening", Icon: Sunset },
  { label: "Late Night", Icon: Moon },
];

const Question4 = ({ value, onChange }: Question4Props) => (
  <div className="mx-auto flex min-h-[720px] w-full max-w-7xl flex-col items-center text-center">
    <h1 className="mt-20 max-w-5xl text-4xl font-bold leading-tight text-on-surface md:text-6xl">
      When do distractions usually win?
    </h1>
    <p className="mt-7 text-lg text-on-surface-variant md:text-2xl">
      Select the time of day you find it hardest to stay focused.
    </p>

    <div className="relative mt-40 grid w-full gap-10 md:grid-cols-4 md:gap-16">
      <div className="absolute left-24 right-24 top-24 hidden h-1 bg-secondary-container md:block" />
      {options.map(({ label, Icon }) => {
        const selected = value === label;
        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(label)}
            className="relative z-10 flex flex-col items-center"
          >
            <span
              className={`flex h-48 w-48 items-center justify-center rounded-full bg-white shadow-[0_18px_55px_rgba(26,28,30,0.08)] transition ${
                selected ? "ring-4 ring-primary" : "ring-0"
              }`}
            >
              <Icon size={64} className="text-on-surface-variant" />
            </span>
            <span className="mt-10 text-4xl font-bold text-on-surface-variant">
              {label}
            </span>
          </button>
        );
      })}
    </div>
  </div>
);

export default Question4;
