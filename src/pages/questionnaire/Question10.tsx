import { ArrowUp, Brain } from "lucide-react";

type Question10Props = {
  dream: string;
  value: string;
  onChange: (value: string) => void;
};

const Question10 = ({ dream, value, onChange }: Question10Props) => {
  const cleanDream = dream.trim() || "your dream";

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-outline">
        Deep Dive
      </p>
      <div className="mt-5 flex gap-3">
        <span className="h-3 w-24 rounded-full bg-primary" />
        <span className="h-3 w-24 rounded-full bg-secondary-container" />
        <span className="h-3 w-24 rounded-full bg-secondary-container" />
      </div>

      <div className="mt-24 w-full rounded-[32px] bg-white p-10 text-left shadow-[0_24px_70px_rgba(26,28,30,0.08)] md:p-16">
        <div className="flex items-start gap-6">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-container text-primary">
            <Brain size={30} fill="currentColor" />
          </span>
          <div>
            <p className="text-xl font-bold text-on-surface-variant">
              Reclaim Coach
            </p>
            <h1 className="mt-5 text-2xl font-medium leading-10 text-on-surface md:text-3xl">
              You mentioned wanting to focus on {cleanDream}.{" "}
              <span className="font-bold">
                Why is this dream important to you?
              </span>
            </h1>
          </div>
        </div>

        <div className="relative mt-24">
          <textarea
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={`I want to pursue ${cleanDream} because...`}
            className="min-h-48 w-full resize-none rounded-[28px] border-0 bg-secondary-container/45 p-8 pr-24 text-xl text-on-surface outline-none placeholder:text-outline/40 focus:ring-2 focus:ring-primary"
          />
          <span className="absolute bottom-7 right-7 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_14px_28px_rgba(0,79,217,0.28)]">
            <ArrowUp size={32} />
          </span>
        </div>

        <p className="mt-10 text-center text-base font-semibold text-outline">
          Take your time. There are no wrong answers.
        </p>
      </div>
    </div>
  );
};

export default Question10;
