import { ExternalLink } from "lucide-react";
import {
  PageHero,
  SectionHeading,
  StatusPanel,
  SurfaceCard,
} from "../components/PageComponents";

const FORM_LINK = "https://forms.gle/2de2kSHcAj1VJEK87";

const reasons = [
  {
    title: "May maayos na record ang Bustos",
    description:
      "Kapag rehistrado sa masterlist, mas may malinaw na talaan ang Bustos ng mga PWD sa Barangay Cambaog.",
  },
  {
    title: "Mas madaling mamonitor ang iba-ibang disability sa Cambaog",
    description:
      "Nakakatulong ang masterlist para makita kung ilan at anu-ano ang uri ng disability na naroon sa barangay.",
  },
  {
    title: "Dito ibinabase ang pamimigay ng tulong at kagamitan",
    description:
      "Kung may programang tulad ng libreng wheelchair, sa masterlist unang tumitingin para malaman kung sino ang maaaring mabigyan.",
  },
  {
    title: "Mas napaplano ang susunod na serbisyo at programa",
    description:
      "Ang kumpletong masterlist ay gabay sa barangay para makapaghanda ng tamang assistance para sa mga PWD.",
  },
];

export default function MasterlistRegisterPage() {
  return (
    <div className="space-y-6">
      <PageHero
        badge="Masterlist"
        title="Mag-register sa Barangay Cambaog masterlist"
        description="Kung ikaw o ang iyong kaanak ay PWD sa Barangay Cambaog, mahalagang makasama sa opisyal na masterlist para sa mas maayos na record, monitoring, at pagbibigay ng programa."
      >
        <a
          href={FORM_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-sky-700 px-5 py-3 text-base font-semibold !text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-200"
        >
          Register now
          <ExternalLink size={18} aria-hidden="true" />
        </a>
      </PageHero>

      <StatusPanel
        tone="amber"
        title="Paalala para sa senior citizens"
        description="Ang mga senior citizen ay automatic na hindi na kasama sa PWD coverage para sa application o renewal. Dahil dito, hindi na sila maaaring mag-apply ng bagong PWD ID o mag-renew ng existing PWD ID."
      />

      <SurfaceCard>
        <SectionHeading
          title="Bakit mahalaga ang pag-register?"
          description="Narito ang mga pangunahing dahilan kung bakit dapat kasama sa Barangay Cambaog PWD masterlist."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="rounded-3xl border border-sky-100 bg-sky-50/70 p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Dahilan {index + 1}
              </p>
              <h2 className="mt-2 text-lg font-bold text-slate-950">{reason.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </SurfaceCard>
    </div>
  );
}
