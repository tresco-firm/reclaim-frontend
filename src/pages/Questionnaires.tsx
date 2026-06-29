const Questionnaires = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-10 px-45 max-md:py-5 max-md:px-15">
      <img
        src="/hero-questionnaire.png"
        alt="Questionnaire"
        className="w-[50%] h-auto "
      />
      <h1 className="text-4xl font-bold text-center max-md:text-2xl">
        Let's Understand Your <br /> Relationship With Technology
      </h1>
      <p className="text-lg text-center">
        This isn't a test. It's the first step toward reclaiming your life.
      </p>
      <button className="button">Begin my recovery assessment!</button>
    </section>
  );
};

export default Questionnaires;
