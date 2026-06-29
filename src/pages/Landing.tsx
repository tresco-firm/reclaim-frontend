const Landing = () => (
  <main className="flex flex-row justify-between py-15 px-45 max-md:py-5 max-md:px-15 gap-30 max-lg:flex-col-reverse max-md:gap-10">
    <section className="flex flex-col items-start justify-center gap-6 min-w-[50%]">
      <h1 className="text-4xl font-bold">
        Reclaim Your Life
        <br />
        from the <span className="inline text-primary">Screen</span>
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
        <img
          src="/hero.png"
          alt="Landing"
          className="w-auto h-120 max-lg:h-auto"
        />
      </div>
    </section>
  </main>
);

export default Landing;
