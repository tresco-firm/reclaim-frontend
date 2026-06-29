const JoinTheMovement = () => (
  <main className="min-h-[calc(100vh-96px)] px-8 py-16 md:px-16 lg:px-32">
    <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-xl">
      <h1 className="text-4xl font-bold text-slate-900">Join the Movement</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">
        Join a community of people reclaiming their time and focus. Together we
        build accountability, celebrate progress, and design technology that
        supports intention instead of distraction.
      </p>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <section className="rounded-[24px] border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Community Challenges
          </h2>
          <p className="mt-4 text-slate-600">
            Take part in group focus sessions, distraction detox challenges, and
            accountability milestones.
          </p>
        </section>
        <section className="rounded-[24px] border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Support & Coaching
          </h2>
          <p className="mt-4 text-slate-600">
            Connect with focus coaches and community mentors who help you make
            steady progress toward your goals.
          </p>
        </section>
      </div>
      <div className="mt-12 rounded-[24px] border border-primary/20 bg-primary/5 p-8">
        <h2 className="text-2xl font-semibold text-primary">
          Be part of something bigger
        </h2>
        <p className="mt-4 text-slate-600">
          Joining the movement means choosing intention over compulsive
          scrolling, and choosing shared momentum over isolated struggle.
        </p>
      </div>
    </div>
  </main>
);

export default JoinTheMovement;
