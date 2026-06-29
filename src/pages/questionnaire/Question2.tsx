import {
  Briefcase,
  Camera,
  Clapperboard,
  Gamepad2,
  Grid3X3,
  Music2,
  PlaySquare,
} from "lucide-react";

type Question2Props = {
  value: string[];
  onChange: (value: string[]) => void;
};

const options = [
  { label: "Instagram", Icon: Camera },
  { label: "YouTube", Icon: PlaySquare },
  { label: "TikTok", Icon: Music2 },
  { label: "LinkedIn", Icon: Briefcase },
  { label: "Gaming", Icon: Gamepad2 },
  { label: "Netflix", Icon: Clapperboard },
  { label: "Multiple Apps", helper: "It's a combination of several", Icon: Grid3X3 },
];

const Question2 = ({ value, onChange }: Question2Props) => {
  const toggleOption = (option: string) => {
    onChange(
      value.includes(option)
        ? value.filter((item) => item !== option)
        : [...value, option],
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
      <h1 className="max-w-4xl text-4xl font-bold leading-tight text-on-surface md:text-6xl">
        Which app steals most of your attention?
      </h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-on-surface-variant md:text-2xl">
        We'll use this to personalize your digital wellness plan. You can select
        more than one.
      </p>

      <div className="mt-24 grid w-full gap-7 md:grid-cols-4">
        {options.map(({ label, helper, Icon }) => {
          const selected = value.includes(label);
          return (
            <button
              key={label}
              type="button"
              onClick={() => toggleOption(label)}
              className={`flex min-h-56 flex-col items-center justify-center rounded-[28px] border bg-white p-8 text-center transition hover:-translate-y-1 hover:border-primary/50 ${
                selected
                  ? "border-primary shadow-[0_20px_55px_rgba(0,79,217,0.16)]"
                  : "border-outline/15"
              } ${label === "Multiple Apps" ? "md:col-span-2 md:flex-row md:gap-12 md:text-left" : ""}`}
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-surface text-on-surface-variant">
                <Icon size={36} strokeWidth={2.2} />
              </span>
              <span>
                <span className="mt-8 block text-2xl font-bold text-on-surface md:text-3xl">
                  {label}
                </span>
                {helper && (
                  <span className="mt-3 block text-lg text-on-surface-variant">
                    {helper}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question2;
