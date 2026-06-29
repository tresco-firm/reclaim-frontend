import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Question1 from "./questionnaire/Question1";
import Question2 from "./questionnaire/Question2";
import Question3 from "./questionnaire/Question3";
import Question4 from "./questionnaire/Question4";
import Question5 from "./questionnaire/Question5";
import Question6 from "./questionnaire/Question6";
import Question7 from "./questionnaire/Question7";
import SubmittedStep from "./questionnaire/SubmittedStep";
import type { Answers } from "./questionnaire/types";
import { supabase } from "../config/supabase";
import { useAuth } from "../utils/auth";

const initialAnswers: Answers = {
  screenTimeHours: 3.5,
  attentionApps: [],
  phoneAbsenceFeeling: "",
  distractionWindow: "",
  scrollingTriggers: [],
  habitStatement: "",
  commitmentPercent: 25,
};

const totalSteps = 7;

const Questionnaires = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const { user, signIn } = useAuth();

  const progress = useMemo(
    () => Math.round(((step + 1) / totalSteps) * 100),
    [step],
  );

  const canContinue =
    step === 0 ||
    (step === 1 && answers.attentionApps.length > 0) ||
    (step === 2 && answers.phoneAbsenceFeeling.length > 0) ||
    (step === 3 && answers.distractionWindow.length > 0) ||
    (step === 4 && answers.scrollingTriggers.length > 0) ||
    (step === 5 && answers.habitStatement.length > 0) ||
    step === 6;

  const setAnswer = <Key extends keyof Answers>(
    key: Key,
    value: Answers[Key],
  ) => {
    setAnswers((current) => ({ ...current, [key]: value }));
    setSubmitError("");
  };

  const goBack = () => setStep((current) => Math.max(current - 1, 0));

  const goNext = async () => {
    if (!canContinue || isSubmitting) return;

    if (step < totalSteps - 1) {
      setStep((current) => current + 1);
      return;
    }

    await submitAnswers();
  };

  const submitAnswers = async () => {
    const email = user?.email;

    if (!user || !email) {
      setSubmitError("Please sign in so we can save this to your email.");
      await signIn();
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    const { error } = await supabase.from("questionnaire_responses").upsert(
      {
        user_id: user.id,
        email,
        answers,
        screen_time_hours: answers.screenTimeHours,
        attention_apps: answers.attentionApps,
        phone_absence_feeling: answers.phoneAbsenceFeeling,
        distraction_window: answers.distractionWindow,
        scrolling_triggers: answers.scrollingTriggers,
        habit_statement: answers.habitStatement,
        commitment_percent: answers.commitmentPercent,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "email" },
    );

    setIsSubmitting(false);

    if (error) {
      setSubmitError(
        `${error.message}. If the table is missing, run database/questionnaire_responses.sql in Supabase.`,
      );
      return;
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-white px-6 py-16">
        <SubmittedStep />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-on-surface">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 md:px-10">
        <button
          type="button"
          onClick={goBack}
          className="flex h-12 min-w-12 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface"
          aria-label="Go back"
        >
          <ArrowLeft size={28} />
          {step >= 3 && <span className="ml-2 hidden font-semibold md:inline">Back</span>}
        </button>

        <div className="w-56 md:w-96">
          <div className="h-2 rounded-full bg-secondary-container">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          {step >= 4 && (
            <p className="mt-5 text-center text-sm font-bold uppercase tracking-[0.18em] text-on-surface-variant">
              Step {step - 1} of 6
            </p>
          )}
        </div>

        {step === 0 ? (
          <button
            type="button"
            onClick={() => {
              setAnswer("screenTimeHours", 0);
              setStep(1);
            }}
            className="px-3 py-2 font-semibold text-on-surface-variant transition hover:text-primary"
          >
            Skip
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setStep(0)}
            className="flex items-center gap-2 px-3 py-2 font-semibold text-on-surface-variant transition hover:text-primary"
          >
            <X size={24} />
            <span className="hidden md:inline">Exit</span>
          </button>
        )}
      </header>

      <section className="px-6 pb-12 pt-10 md:px-10">
        {step === 0 && (
          <Question1
            value={answers.screenTimeHours}
            onChange={(value) => setAnswer("screenTimeHours", value)}
          />
        )}
        {step === 1 && (
          <Question2
            value={answers.attentionApps}
            onChange={(value) => setAnswer("attentionApps", value)}
          />
        )}
        {step === 2 && (
          <Question3
            value={answers.phoneAbsenceFeeling}
            onChange={(value) => setAnswer("phoneAbsenceFeeling", value)}
          />
        )}
        {step === 3 && (
          <Question4
            value={answers.distractionWindow}
            onChange={(value) => setAnswer("distractionWindow", value)}
          />
        )}
        {step === 4 && (
          <Question5
            value={answers.scrollingTriggers}
            onChange={(value) => setAnswer("scrollingTriggers", value)}
          />
        )}
        {step === 5 && (
          <Question6
            value={answers.habitStatement}
            onChange={(value) => setAnswer("habitStatement", value)}
          />
        )}
        {step === 6 && (
          <Question7
            value={answers.commitmentPercent}
            onChange={(value) => setAnswer("commitmentPercent", value)}
          />
        )}
      </section>

      <footer className="sticky bottom-0 bg-white/90 px-6 py-8 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
          {submitError && (
            <p className="max-w-2xl text-center text-sm font-semibold text-red-600">
              {submitError}
            </p>
          )}
          <button
            type="button"
            onClick={goNext}
            disabled={!canContinue || isSubmitting}
            className={`flex min-h-16 min-w-72 items-center justify-center gap-3 rounded-eight px-10 text-lg font-bold text-white shadow-[0_12px_28px_rgba(0,79,217,0.25)] transition ${
              canContinue && !isSubmitting
                ? "bg-primary hover:-translate-y-0.5 hover:bg-primary/90"
                : "cursor-not-allowed bg-primary/35 shadow-none"
            }`}
          >
            {step === 0
              ? "Continue to Insights"
              : step === totalSteps - 1
                ? isSubmitting
                  ? "Saving..."
                  : "Generate My Profile"
                : "Continue"}
            <ArrowRight size={24} />
          </button>
          {step === 1 && (
            <p className="text-sm font-bold text-on-surface-variant">
              Your data is secure and never sold.
            </p>
          )}
        </div>
      </footer>
    </main>
  );
};

export default Questionnaires;
