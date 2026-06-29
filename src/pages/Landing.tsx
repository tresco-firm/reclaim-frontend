const Landing = () => (
  <main className="flex flex-row justify-between py-15 px-45 gap-30">
    <section className="flex flex-col items-start justify-center gap-6 min-w-[50%]">
      <h1 className="font-bold text-5xl/15">
        Reclaim Your Life
        <br />
        from the <span className="text-[#004FD9] inline">Screen</span>
      </h1>
      <p className="tracking-wide text-gray-600 text-xl/10">
        The average person loses 180+ hours every month scrolling. Reclaim your
        focus, restore your clarity, and build a relationship with technology
        that serves you, not the algorithm.
      </p>
      <button className="text-xl button">Start reclaiming my life</button>
    </section>
    <section className="flex flex-col items-center justify-center min-w-[50%]">
      <div>
        <img src="/public/hero.svg" alt="Landing" className="w-200 h-200" />
      </div>
    </section>
  </main>
);

export default Landing;
