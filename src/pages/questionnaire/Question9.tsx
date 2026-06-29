type Question9Props = {
  value: string;
  onChange: (value: string) => void;
};

const suggestions = ["My startup", "My studies", "My health", "My family"];

const Question9 = ({ value, onChange }: Question9Props) => (
  <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
    <div className="min-h-[420px] rounded-[28px] bg-gradient-to-br from-slate-950 via-slate-800 to-primary/40 shadow-[0_24px_70px_rgba(26,28,30,0.16)]" />

    <div>
      <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-6xl">
        What dream deserves more of your attention right now?
      </h1>
      <p className="mt-8 text-xl leading-8 text-on-surface-variant">
        Reclaim helps you focus on what truly matters.
      </p>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="I want to focus on..."
        className="mt-10 min-h-44 w-full resize-none rounded-[28px] border-0 bg-secondary-container/45 p-8 text-xl text-on-surface outline-none transition placeholder:text-outline/40 focus:ring-2 focus:ring-primary"
      />

      <div className="mt-8 flex flex-wrap gap-3">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => onChange(suggestion)}
            className="rounded-full bg-secondary-container px-5 py-3 text-base font-semibold text-on-surface-variant transition hover:bg-primary hover:text-white"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Question9;
