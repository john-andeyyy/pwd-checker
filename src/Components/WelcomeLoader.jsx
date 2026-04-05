export default function WelcomeLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#e0f2fe_0%,#f8fafc_100%)] px-4">
      <div className="w-full max-w-lg rounded-[32px] border border-white/70 bg-white/90 p-8 text-center shadow-[0_18px_48px_rgba(15,23,42,0.12)] backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
          PWD Portal
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
          Preparing a simple and readable experience
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Loading registration records and accessibility-friendly tools.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-3.5 w-3.5 rounded-full bg-sky-700 animate-bounce" />
          <span className="h-3.5 w-3.5 rounded-full bg-teal-600 [animation-delay:160ms] animate-bounce" />
          <span className="h-3.5 w-3.5 rounded-full bg-amber-500 [animation-delay:320ms] animate-bounce" />
        </div>
      </div>
    </div>
  );
}
