import { Link } from "react-router-dom";
import { someStatistics } from "../constants";
import { useAuth } from "../utils/auth";

const Landing = () => {
  const { user, signIn } = useAuth();

  return (
    <main className="flex flex-row justify-between py-15 px-45 max-md:py-5 max-md:px-15 gap-30 max-lg:flex-col-reverse max-md:gap-10">
      <section className="flex flex-col items-start justify-center gap-6 min-w-[50%]">
        <h1 className="text-4xl font-bold">
          Reclaim Your Life
          <br />
          from the <span className="inline text-primary">Screen</span>
        </h1>
        <p className="tracking-wide text-gray-600 text-xl/10">
          The average person loses 180+ hours every month scrolling. Reclaim
          your focus, restore your clarity, and build a relationship with
          technology that serves you, not the algorithm.
        </p>

        {user ? (
          <Link to="/questionnaires" className="inline-flex text-xl button">
            Start reclaiming my life
          </Link>
        ) : (
          <button className="button" onClick={signIn}>
            Sign in to start reclaiming my life
          </button>
        )}
        <div className="flex flex-row items-center justify-around w-full max-md:flex-col max-md:items-center max-md:gap-4">
          {someStatistics.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold">{stat.value}</h2>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
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
};
export default Landing;
