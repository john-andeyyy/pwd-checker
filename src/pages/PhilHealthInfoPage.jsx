import { PageHero, SectionHeading, SurfaceCard } from "../components/PageComponents";

const accordionItems = [
  {
    title: "Sino ang puwedeng magkaroon ng libreng PhilHealth?",
    content:
      "Ang lahat ng PWD na walang kakayahang magtrabaho ay may libreng PhilHealth. Kasama rito ang mga walang trabaho o hindi talaga kaya makapagtrabaho dahil sa kanilang kondisyon.",
  },
  {
    title: "Paano magpa-register sa PhilHealth?",
    content:
      "Pumunta lamang sa PhilHealth para makapagpa-register at magdala ng valid ID. Mas mabuti kung dala rin ang iba pang personal na detalye para mas mabilis ang proseso.",
  },
  {
    title: "Libre ba ito para sa lahat ng PWD?",
    content:
      "Libre lang ang PhilHealth para sa mga PWD na walang trabaho o hindi kayang makapagtrabaho. Kung ang PWD ay may trabaho, hindi siya makakakuha ng libreng PhilHealth sa paraang ito.",
  },
];

function InfoAccordionItem({ title, content }) {
  return (
    <details
      open
      className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 open:border-sky-200 open:bg-sky-50/70"
    >
      <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-900">
        {title}
      </summary>
      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{content}</p>
    </details>
  );
}

export default function PhilHealthInfoPage() {
  return (
    <div className="space-y-6">
      <PageHero
        badge="Information"
        title="PhilHealth information"
        description="Basahin ang gabay na ito para malaman kung sinu-sino ang maaaring makakuha ng libreng PhilHealth at kung paano magparehistro."
      />

      <SurfaceCard>
        <SectionHeading
          title="PhilHealth"
          description="Mahahalagang impormasyon para sa mga PWD tungkol sa libreng PhilHealth."
        />

        <div className="space-y-4">
          {accordionItems.map((item) => (
            <InfoAccordionItem
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </SurfaceCard>
    </div>
  );
}
