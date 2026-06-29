type Question8Props = {
  value: string[];
  onChange: (value: string[]) => void;
};

const options = [
  { label: "Learning", helper: "Acquire new skills" },
  { label: "Startup Building", helper: "Launch your vision" },
  { label: "Fitness", helper: "Strengthen your body" },
  { label: "Family", helper: "Quality time together" },
  { label: "Reading", helper: "Deep focus sessions" },
  { label: "Creativity", helper: "Express your ideas" },
  { label: "Career Growth", helper: "Advance your path" },
  { label: "Mental Wellness", helper: "Find your center" },
];

const Question8 = ({ value, onChange }: Question8Props) => {
  const toggleOption = (option: string) => {
    onChange(
      value.includes(option)
        ? value.filter((item) => item !== option)
        : [...value, option],
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
      <p className="text-xl font-semibold text-on-surface">
        Imagine getting back 2 extra hours every day.
      </p>
      <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-tight text-on-surface md:text-6xl">
        What would you spend them on?
      </h1>
      <p className="mt-6 text-lg text-on-surface-variant md:text-2xl">
        Select all that apply.
      </p>

      <div className="mt-20 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {options.map(({ label, helper }) => {
          const selected = value.includes(label);
          return (
            <button
              key={label}
              type="button"
              onClick={() => toggleOption(label)}
              className={`overflow-hidden rounded-[28px] bg-white text-left shadow-[0_18px_55px_rgba(26,28,30,0.08)] transition hover:-translate-y-1 ${
                selected ? "ring-2 ring-primary" : "ring-1 ring-outline/10"
              }`}
            >
              <div className="h-44 bg-gradient-to-br from-surface to-secondary-container/70" />
              <div className="p-8">
                <p className="text-3xl font-semibold text-on-surface">
                  {label}
                </p>
                <p className="mt-4 text-xl text-on-surface-variant">{helper}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question8;
