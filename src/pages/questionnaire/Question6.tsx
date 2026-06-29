import { BadgeCheck, Brain } from "lucide-react";

type Question6Props = {
  value: string;
  onChange: (value: string) => void;
};

const options = [
  "I check my phone unconsciously",
  "I constantly switch between apps",
  "I regret wasting time online",
  "I struggle to focus deeply",
];

const Question6 = ({ value, onChange }: Question6Props) => (
  <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
    <Brain className="text-primary" size={44} fill="currentColor" />
    <h1 className="mt-12 text-4xl font-bold leading-tight text-on-surface md:text-6xl">
      Which statement feels most true?
    </h1>
    <p className="mt-8 text-lg text-on-surface-variant md:text-2xl">
      Take a moment to reflect honestly on your digital habits.
    </p>

    <div className="mt-20 flex w-full flex-col gap-6">
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`flex min-h-28 items-center justify-between rounded-[28px] bg-white px-10 text-left text-2xl font-semibold text-on-surface transition md:min-h-36 ${
              selected
                ? "border-2 border-primary bg-primary-container/25"
                : "border-2 border-transparent"
            }`}
          >
            <span>{option}</span>
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full border-4 ${
                selected ? "border-primary/20 text-primary" : "border-outline/30"
              }`}
            >
              {selected && <BadgeCheck size={26} />}
            </span>
          </button>
        );
      })}
    </div>
  </div>
);

export default Question6;
