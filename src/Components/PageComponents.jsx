import {
  ArrowLeft,
  BookOpenText,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  HeartPulse,
  Info,
  Hash,
  Home,
  Menu,
  Search,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import packageInfo from "../../package.json";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true, icon: Home },
  { to: "/search-name", label: "Search by name", icon: Search },
  { to: "/search-id", label: "Search by PWD number", icon: Hash },
  {
    to: "/info",
    label: "Information",
    icon: CircleHelp,
    children: [
      { to: "/application-guide", label: "Application guide", icon: Info },
      { to: "/renew-guide", label: "Renewal guide", icon: BookOpenText },
      { to: "/info/philhealth", label: "PhilHealth", icon: HeartPulse },
    ],
  },
  { to: "/officer", label: "Officers", icon: Users },
  { to: "/masterlist", label: "Masterlist", icon: ClipboardList },
];

const APP_VERSION = `v${packageInfo.version}`;

const surfaceClassName =
  "rounded-[28px] border border-sky-100 bg-white/95 shadow-[0_18px_48px_rgba(15,23,42,0.08)] backdrop-blur";

export function AppShell({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState({ info: false });
  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname.startsWith("/info")) {
      setOpenGroups((current) => ({ ...current, info: true }));
    }
  }, [location.pathname]);

  const toggleGroup = (groupKey) => {
    setOpenGroups((current) => ({ ...current, [groupKey]: !current[groupKey] }));
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f5fbff_0%,#eef7fb_48%,#f9fcfd_100%)] text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sky-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      {isSidebarOpen ? (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-[55] bg-slate-950/35 backdrop-blur-[2px]"
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : null}
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-3 px-4 py-2 sm:px-6">
          <button
            type="button"
            aria-label={isSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isSidebarOpen}
            onClick={() => setIsSidebarOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 text-sky-900 shadow-sm transition hover:bg-sky-100 focus:outline-none focus:ring-4 focus:ring-sky-100 md:hidden"
          >
            {isSidebarOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>

          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/Images/CambaogPWD.png"
              alt="Cambaog PWD logo"
              className="h-10 w-10 rounded-2xl object-cover shadow-sm"
            />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
                Cambaog, Bustos, Bulacan
              </p>
              <p className="truncate text-[1.7rem] font-bold leading-none text-slate-900">
                PWD Portal
              </p>
            </div>
          </Link>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            {[
              { src: "/Images/Brgy_Cambaog.png", alt: "Barangay Cambaog logo" },
              { src: "/Images/BustosLogo.png", alt: "Bustos logo" },
              { src: "/Images/Samaka.jpg", alt: "Samaka logo" },
            ].map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className={`h-10 rounded-2xl object-cover ${
                  logo.src === "/Images/Samaka.jpg" ? "w-24" : "w-10"
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      <aside
        aria-label="Sidebar navigation"
        className={`fixed left-0 top-0 z-[60] flex h-screen w-[min(22rem,88vw)] flex-col border-r border-white/70 bg-white/96 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-transform duration-300 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-sky-100 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Navigation
            </p>
            <p className="text-lg font-bold text-slate-950">PWD Portal</p>
          </div>
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setIsSidebarOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-sky-100"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Primary" className="flex-1 overflow-y-auto px-4 py-4">
          <div className="space-y-2">
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                const groupKey = item.label.toLowerCase();
                const isOpen = Boolean(openGroups[groupKey]);
                const isParentActive = item.children.some((child) =>
                  location.pathname.startsWith(child.to),
                );

                return (
                  <div key={item.to} className="space-y-2">
                    <button
                      type="button"
                      onClick={() => toggleGroup(groupKey)}
                      className={`flex min-h-14 w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                        isParentActive
                          ? "bg-sky-700 !text-white shadow-sm"
                          : isOpen
                            ? "bg-sky-50 text-sky-800"
                          : "bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-800"
                      }`}
                    >
                      <item.icon size={18} aria-hidden="true" className="shrink-0" />
                      <span className="flex-1">{item.label}</span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen ? (
                      <div className="space-y-2 pl-4">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                                isActive
                                  ? "bg-sky-700 !text-white shadow-sm"
                                  : "bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-800"
                              }`
                            }
                          >
                            {child.icon ? (
                              <child.icon size={16} aria-hidden="true" className="shrink-0" />
                            ) : null}
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex min-h-14 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-sky-700 !text-white shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-800"
                    }`
                  }
                >
                  <item.icon size={18} aria-hidden="true" className="shrink-0" />
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-sky-100 px-4 py-4">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">
            Barangay Cambaog PWD
          </p>
          <p className="mt-1 text-center text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            {APP_VERSION}
          </p>
        </div>
      </aside>

      <div className="flex w-full gap-6 px-4 py-4 sm:px-6 sm:pt-3">
        <aside className="sticky top-22 hidden h-[calc(100vh-6.5rem)] w-72 shrink-0 md:flex">
          <div className={`${surfaceClassName} flex w-full flex-col p-4`}>
            <div className="border-b border-sky-100 px-2 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Navigation
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-950">PWD Portal</p>
            </div>

            <nav aria-label="Desktop primary" className="flex-1 space-y-2 px-2 py-4">
              {NAV_ITEMS.map((item) => {
                if (item.children) {
                  const groupKey = item.label.toLowerCase();
                  const isOpen = Boolean(openGroups[groupKey]);
                  const isParentActive = item.children.some((child) =>
                    location.pathname.startsWith(child.to),
                  );

                  return (
                    <div key={item.to} className="space-y-2">
                      <button
                        type="button"
                        onClick={() => toggleGroup(groupKey)}
                        className={`flex min-h-14 w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                          isParentActive
                            ? "bg-sky-700 !text-white shadow-sm"
                            : isOpen
                              ? "bg-sky-50 text-sky-800"
                            : "bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-800"
                        }`}
                      >
                        <item.icon size={18} aria-hidden="true" className="shrink-0" />
                        <span className="flex-1">{item.label}</span>
                        <ChevronDown
                          size={18}
                          aria-hidden="true"
                          className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isOpen ? (
                        <div className="space-y-2 pl-4">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              className={({ isActive }) =>
                                `flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                                  isActive
                                    ? "bg-sky-700 !text-white shadow-sm"
                                    : "bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-800"
                                }`
                              }
                            >
                              {child.icon ? (
                                <child.icon size={16} aria-hidden="true" className="shrink-0" />
                              ) : null}
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `flex min-h-14 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "bg-sky-700 !text-white shadow-sm"
                          : "bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-800"
                      }`
                    }
                  >
                    <item.icon size={18} aria-hidden="true" className="shrink-0" />
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>

            <div className="border-t border-sky-100 px-2 pt-4">
              <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">
                Barangay Cambaog PWD
              </p>
              <p className="mt-1 text-center text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                {APP_VERSION}
              </p>
            </div>
          </div>
        </aside>

        <main id="main-content" className="min-w-0 flex-1 pr-0">
          {children}
        </main>
      </div>
    </div>
  );
}

export function PageHero({ badge, title, description, children }) {
  return (
    <section className={`${surfaceClassName} overflow-hidden p-6 sm:p-8`}>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-3xl">
          {badge ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              {badge}
            </p>
          ) : null}
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}

export function SurfaceCard({ children, className = "" }) {
  return <section className={`${surfaceClassName} p-6 sm:p-8 ${className}`}>{children}</section>;
}

export function BackButton({ to }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to);
      return;
    }

    navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-flex min-h-12 items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-900 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-100"
    >
      <ArrowLeft size={18} aria-hidden="true" />
      Back
    </button>
  );
}

export function PrimaryButton({
  children,
  className = "",
  tone = "sky",
  ...props
}) {
  const tones = {
    sky: "bg-sky-700 text-white hover:bg-sky-800 focus:ring-sky-200",
    amber: "bg-amber-500 text-slate-950 hover:bg-amber-400 focus:ring-amber-200",
    slate: "bg-slate-900 text-white hover:bg-slate-950 focus:ring-slate-200",
  };

  return (
    <button
      {...props}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold shadow-sm transition focus:outline-none focus:ring-4 ${tones[tone]} ${className}`}
    >
      {children}
    </button>
  );
}

export function SectionHeading({ title, description }) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function StatusPanel({ title, description, tone = "sky" }) {
  const tones = {
    sky: "border-sky-100 bg-sky-50 text-sky-950",
    rose: "border-rose-100 bg-rose-50 text-rose-950",
    amber: "border-amber-100 bg-amber-50 text-amber-950",
  };

  return (
    <div className={`rounded-2xl border p-4 sm:p-5 ${tones[tone]}`}>
      <p className="text-base font-semibold">{title}</p>
      {description ? <p className="mt-1 text-sm leading-6 opacity-80">{description}</p> : null}
    </div>
  );
}

export function FormField({ label, htmlFor, hint, children }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-slate-800">{label}</span>
      {children}
      {hint ? <span className="text-sm text-slate-500">{hint}</span> : null}
    </label>
  );
}

export function TextInput(props) {
  return (
    <input
      {...props}
      className={`min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100 ${props.className || ""}`}
    />
  );
}
