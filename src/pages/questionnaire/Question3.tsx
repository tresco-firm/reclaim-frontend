import { Annoyed, Frown, Smile, SmilePlus } from "lucide-react";

type Question3Props = {
  value: string;
  onChange: (value: string) => void;
};

const options = [
  {
    label: "Relieved",
    helper: "I secretly welcome the break from constant connectivity.",
    Icon: Smile,
  },
  {
    label: "Slightly Uncomfortable",
    helper: "I'd manage, but I'd miss having quick access to information.",
    Icon: SmilePlus,
  },
  {
    label: "Anxious",
    helper: "I rely heavily on it for work, social life, and daily tasks.",
    Icon: Annoyed,
  },
  {
    label: "Completely Lost",
    helper: "It's my lifeline. The thought of losing it is genuinely panic-inducing.",
    Icon: Frown,
  },
];

const Question3 = ({ value, onChange }: Question3Props) => (
  <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
    <p className="text-sm font-bold uppercase tracking-[0.22em] text-outline">
      Discovery
    </p>
    <div className="mt-12 h-2 w-full rounded-full bg-secondary-container">
      <div className="h-full w-1/5 rounded-full bg-primary" />
    </div>

    <h1 className="mt-28 max-w-5xl text-4xl font-bold leading-tight text-on-surface md:text-6xl">
      If your phone disappeared for 24 hours, how would you feel?
    </h1>
    <p className="mt-10 max-w-4xl text-lg leading-8 text-on-surface-variant md:text-2xl">
      Be honest. There are no wrong answers, only data to help us tailor your
      journey to digital clarity.
    </p>

    <div className="mt-24 grid w-full gap-8 md:grid-cols-2">
      {options.map(({ label, helper, Icon }) => {
        const selected = value === label;
        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(label)}
            className={`rounded-[28px] border bg-white p-8 text-left transition hover:border-primary/50 ${
              selected
                ? "border-primary bg-primary-container/30 shadow-[0_18px_45px_rgba(0,79,217,0.12)]"
                : "border-outline/15"
            }`}
          >
            <Icon size={44} className="text-on-surface" strokeWidth={1.9} />
            <p className="mt-10 text-3xl font-bold text-on-surface">{label}</p>
            <p className="mt-5 text-xl leading-8 text-on-surface-variant">
              {helper}
            </p>
          </button>
        );
      })}
    </div>
  </div>
);

export default Question3;
