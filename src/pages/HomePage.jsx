import { createElement } from "react";
import {
  ArrowRight,
  HeartHandshake,
  Info,
  ScrollText,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  PageHero,
  PrimaryButton,
  SectionHeading,
  SurfaceCard,
} from "../components/PageComponents";

const rightsHighlights = [
  {
    title: "Pantay na paggalang at access",
    description:
      "Ang PWD ay may karapatan sa maayos na serbisyo, respeto, at mas madaling access sa mga pampubliko at pribadong lugar kung saan posible ang accommodation.",
    icon: ShieldCheck,
  },
  {
    title: "Diskuwento at tax exemption",
    description:
      "Maaaring makatanggap ng legally recognized discounts at VAT exemption sa mga kwalipikadong bilihin at serbisyo ayon sa umiiral na patakaran.",
    icon: WalletCards,
  },
  {
    title: "Suporta sa kalusugan at kabuhayan",
    description:
      "Kasama sa mga mahalagang benepisyo ang access sa gamot, checkup, assistive needs, at ilang livelihood or community support programs depende sa lokal na implementasyon.",
    icon: HeartHandshake,
  },
];

const infoCards = [
  {
    title: "Bakit mahalaga ang PWD ID?",
    description:
      "Ang PWD ID ang karaniwang gamit para ma-verify ang eligibility sa discounts, benefits, at local assistance. Dapat tama at updated ang impormasyon sa record.",
    icon: Info,
  },
  {
    title: "Anong ihahanda bago mag-apply o mag-renew?",
    description:
      "Ihanda ang basic personal information, medical o supporting documents kung kailangan, valid IDs, at iba pang hinihinging requirements ng barangay o munisipyo.",
    icon: ScrollText,
    ctaLabel: "View steps",
    to: "/application-guide",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHero
        badge="PWD rights and information"
        title="PWD Portal"
        description="Makikita rito ang mahahalagang impormasyon tungkol sa PWD rights, benepisyo, at mga gabay para sa application, renewal, at paghanap ng record."
      >
        <Link to="/application-guide">
          <PrimaryButton>
            View application guide
            <ArrowRight className="ml-2" size={18} aria-hidden="true" />
          </PrimaryButton>
        </Link>
        <Link to="/search-name">
          <PrimaryButton tone="slate">Search records</PrimaryButton>
        </Link>
      </PageHero>

      <SurfaceCard>
        <SectionHeading
          title="Mahahalagang karapatan ng PWD"
          description="Narito ang ilan sa mga pangunahing bagay na dapat alam ng PWD at ng kanilang pamilya o guardian."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {rightsHighlights.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[28px] border border-sky-100 bg-sky-50/70 p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                {createElement(Icon, { size: 22, "aria-hidden": "true" })}
              </div>
              <h2 className="mt-4 text-lg font-bold text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </SurfaceCard>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SurfaceCard>
          <SectionHeading
            title="Mga dapat tandaan"
            description="Simple guide ito para mas madaling maintindihan kung paano makakatulong ang portal at PWD ID sa araw-araw."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {infoCards.map(({ title, description, icon: Icon, ctaLabel, to }) => (
              <article
                key={title}
                className="rounded-[28px] border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
                  {createElement(Icon, { size: 22, "aria-hidden": "true" })}
                </div>
                <h2 className="mt-4 text-lg font-bold text-slate-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                {ctaLabel && to ? (
                  <Link to={to} className="mt-4 inline-flex">
                    <PrimaryButton className="min-h-10 rounded-xl px-4 py-2 text-sm">
                      {ctaLabel}
                      <ArrowRight className="ml-2" size={16} aria-hidden="true" />
                    </PrimaryButton>
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="bg-[linear-gradient(180deg,rgba(14,165,233,0.08),rgba(245,250,255,0.9))]">
          <SectionHeading
            title="Paano gamitin ang portal"
            description="Piliin ang page depende sa kailangan mo."
          />
          <div className="space-y-3">
            <div className="rounded-2xl border border-white/80 bg-white/80 p-4">
              <p className="text-sm font-bold text-slate-950">Search pages</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Gamitin ito kung gusto mong hanapin ang isang existing PWD record gamit
                ang pangalan o PWD number.
              </p>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/80 p-4">
              <p className="text-sm font-bold text-slate-950">Application guide</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Basahin muna ito bago mag-apply para kumpleto ang requirements at hindi
                sayang ang biyahe.
              </p>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/80 p-4">
              <p className="text-sm font-bold text-slate-950">Renewal guide</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Dito makikita ang paalala kung paano i-update o i-renew ang PWD ID kapag
                kailangan na.
              </p>
            </div>
          </div>
        </SurfaceCard>
      </div>

    </div>
  );
}
