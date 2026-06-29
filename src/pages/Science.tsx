const Science = () => (
  <main className="min-h-[calc(100vh-96px)] px-8 py-16 md:px-16 lg:px-32">
    <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-xl">
      <h1 className="text-4xl font-bold text-slate-900">The Science</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">
        Discover the research behind attention, habit change, and digital
        wellbeing. Reclaim uses evidence-based methods to help you build
        sustainable focus and restore mental clarity.
      </p>
      <section className="mt-12 grid gap-8 lg:grid-cols-3">
        <article className="rounded-[24px] border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Behavioral Science
          </h2>
          <p className="mt-4 text-slate-600">
            We leverage cognitive architecture and habit formation research to
            help users break distraction loops and form better digital routines.
          </p>
        </article>
        <article className="rounded-[24px] border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Attention Economics
          </h2>
          <p className="mt-4 text-slate-600">
            Our product is designed around the real costs of attention loss,
            responding to how decision fatigue and infinite-scroll interfaces
            harm performance.
          </p>
        </article>
        <article className="rounded-[24px] border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Neuroplasticity
          </h2>
          <p className="mt-4 text-slate-600">
            Reclaim helps users rebuild focus by creating repeated, meaningful
            practices that reinforce healthy brain habits over time.
          </p>
        </article>
      </section>
    </div>
  </main>
);

export default Science;
