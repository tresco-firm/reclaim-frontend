type Question1Props = {
  value: number;
  onChange: (value: number) => void;
};

const Question1 = ({ value, onChange }: Question1Props) => {
  const monthlyHours = Math.round(value * 30);
  const yearlyDays = Math.round((value * 365) / 24);
  const booksNotRead = Math.round(monthlyHours * 2);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
      <h1 className="max-w-4xl text-4xl font-bold leading-tight text-on-surface md:text-6xl">
        How many hours disappear into scrolling every day?
      </h1>
      <p className="mt-6 text-lg text-on-surface-variant md:text-2xl">
        Be honest. We're here to help you get them back.
      </p>

      <div className="mt-20 w-full max-w-4xl text-left">
        <p className="text-6xl font-bold text-[#ff9b3d] md:text-7xl">
          {value.toFixed(1)}
          <span className="ml-3 text-3xl text-on-surface md:text-4xl">
            hrs / day
          </span>
        </p>

        <input
          aria-label="Daily scrolling hours"
          type="range"
          min="0"
          max="12"
          step="0.1"
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="mt-8 h-5 w-full cursor-pointer appearance-none rounded-full bg-secondary-container accent-[#ff9b3d]"
          style={{
            background: `linear-gradient(to right, #ff9b3d 0%, #ff9b3d ${
              (value / 12) * 100
            }%, #e1e2ec ${(value / 12) * 100}%, #e1e2ec 100%)`,
          }}
        />

        <div className="mt-5 flex justify-between text-sm font-semibold text-outline">
          <span>0h</span>
          <span>12h+</span>
        </div>

        <div className="mt-14 h-px bg-secondary-container" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <MetricCard label="Hours lost monthly" value={monthlyHours} unit="hrs" />
          <MetricCard label="Days lost yearly" value={yearlyDays} unit="days" />
          <MetricCard label="Books not read" value={booksNotRead} unit="books" />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) => (
  <div className="rounded-eight border border-outline/10 bg-white p-8 text-center shadow-[0_18px_50px_rgba(26,28,30,0.07)]">
    <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
      {label}
    </p>
    <p className="mt-5 text-4xl font-bold text-on-surface">
      {value}
      <span className="ml-2 text-base font-medium text-on-surface-variant">
        {unit}
      </span>
    </p>
  </div>
);

export default Question1;
