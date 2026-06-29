import type { Answers } from "./types";

const ReviewStep = ({ answers }: { answers: Answers }) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Review your answers</h2>
    <div className="space-y-4 rounded-[32px] border border-slate-200 bg-slate-50 p-8">
      <div>
        <h3 className="font-semibold text-slate-800">Screen time</h3>
        <p className="mt-2 text-slate-600">
          {answers.screenTimeHours.toFixed(1)} hrs / day
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">Attention apps</h3>
        <p className="mt-2 text-slate-600">
          {answers.attentionApps.join(", ") || "No answer provided"}
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">Phone absence feeling</h3>
        <p className="mt-2 text-slate-600">
          {answers.phoneAbsenceFeeling || "No answer provided"}
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">Distraction window</h3>
        <p className="mt-2 text-slate-600">
          {answers.distractionWindow || "No answer provided"}
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">Scrolling triggers</h3>
        <p className="mt-2 text-slate-600">
          {answers.scrollingTriggers.join(", ") || "No answer provided"}
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">Habit statement</h3>
        <p className="mt-2 text-slate-600">
          {answers.habitStatement || "No answer provided"}
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">Commitment</h3>
        <p className="mt-2 text-slate-600">
          {answers.commitmentPercent}%
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">Reclaimed time uses</h3>
        <p className="mt-2 text-slate-600">
          {answers.reclaimedTimeUses.join(", ") || "No answer provided"}
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">Focus dream</h3>
        <p className="mt-2 text-slate-600">
          {answers.focusDream || "No answer provided"}
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">
          Why this dream matters
        </h3>
        <p className="mt-2 text-slate-600">
          {answers.whyThisDreamMatters || "No answer provided"}
        </p>
      </div>
    </div>
  </div>
);

export default ReviewStep;
