type Question7Props = {
  value: number;
  onChange: (value: number) => void;
};

const commitmentLabels = [
  { max: 30, title: "Exploring", helper: "Just gathering information" },
  { max: 65, title: "Ready", helper: "I want meaningful change soon" },
  { max: 100, title: "Committed", helper: "I'm ready to build new habits" },
];

const Question7 = ({ value, onChange }: Question7Props) => {
  const label =
    commitmentLabels.find((item) => value <= item.max) ??
    commitmentLabels[commitmentLabels.length - 1];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
      <h1 className="max-w-5xl text-4xl font-bold leading-tight text-on-surface md:text-6xl">
        How committed are you to changing your digital habits?
      </h1>
      <p className="mt-8 text-lg leading-8 text-on-surface-variant md:text-2xl">
        Be honest with yourself. There is no wrong answer, only your starting
        point.
      </p>

      <div className="mt-24 w-full max-w-3xl rounded-[28px] bg-white p-12 shadow-[0_24px_70px_rgba(26,28,30,0.08)] md:p-20">
        <p className="text-4xl font-bold text-primary md:text-5xl">
          {label.title}
        </p>
        <p className="mt-4 text-xl font-semibold text-on-surface-variant">
          {label.helper}
        </p>
        <div className="mt-20 flex justify-between text-sm font-bold text-outline/50">
          <span>1%</span>
          <span>100%</span>
        </div>
        <input
          aria-label="Commitment percentage"
          type="range"
          min="1"
          max="100"
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary-container accent-primary"
        />
        <p className="mt-12 text-4xl font-bold text-on-surface">{value}%</p>
      </div>
    </div>
  );
};

export default Question7;
