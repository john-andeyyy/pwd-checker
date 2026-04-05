import { BackButton, PageHero, SurfaceCard } from "./PagePrimitives";

function GuideColumn({ title, subtitle, accentClassName, steps }) {
  return (
    <article className="space-y-5">
      <header>
        <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${accentClassName}`}>
          {title}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">{subtitle}</h2>
      </header>

      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4"
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${accentClassName.replace("text-", "bg-")}`}
            >
              {index + 1}
            </span>
            <div>
              <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function GuidePage({
  badge,
  title,
  description,
  tagalogTitle,
  englishTitle,
  tagalogSteps,
  englishSteps,
}) {
  return (
    <div className="space-y-6">
      <PageHero badge={badge} title={title} description={description}>
        {/* <BackButton /> */}
      </PageHero>

      <SurfaceCard>
        <div className="grid gap-8 lg:grid-cols-2">
          <GuideColumn
            title="Tagalog"
            subtitle={tagalogTitle}
            accentClassName="text-sky-700"
            steps={tagalogSteps}
          />
          <GuideColumn
            title="English"
            subtitle={englishTitle}
            accentClassName="text-teal-700"
            steps={englishSteps}
          />
        </div>
      </SurfaceCard>
    </div>
  );
}
