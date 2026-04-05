import GuideTemplate from "../Components/GuideTemplate";

const tagalogSteps = [
  {
    title: "Magdala ng updated medical certificate kung kailangan",
    description:
      "Kung hihingin para sa renewal, siguraduhing malinaw at valid pa ang dokumento.",
  },
  {
    title: "Magdala ng 2 pirasong 1x1 ID picture",
    description:
      "Mas mabuti kung bago at malinaw ang larawan para sa bagong ID.",
  },
  {
    title: "Ihanda ang lumang PWD ID o reference details",
    description:
      "Makakatulong ito para mapabilis ang pag-verify ng existing record.",
  },
  {
    title: "Kung minor o hindi makapunta, guardian o representative ang pupunta",
    description:
      "Dalhin ang valid ID ng guardian o representative kasama ang ibang requirements.",
  },
];

const englishSteps = [
  {
    title: "Bring an updated medical certificate if required",
    description:
      "If the office asks for one during renewal, make sure the document is clear and still valid.",
  },
  {
    title: "Bring 2 pieces of 1x1 ID photos",
    description:
      "A recent and clear photo helps when preparing the renewed ID.",
  },
  {
    title: "Prepare the old PWD ID or reference details",
    description:
      "This helps staff verify the existing record more quickly.",
  },
  {
    title: "A guardian or representative may go if needed",
    description:
      "Bring the guardian or representative's valid ID together with the other requirements.",
  },
];

export default function RenewalGuidePage() {
  return (
    <GuideTemplate
      badge="Renewal guide"
      title="PWD ID renewal requirements"
      description="Use this checklist before renewal so the visit is shorter and the documents are complete."
      noticeTitle="Paalala para sa senior citizens"
      noticeDescription="Ang mga senior citizen ay automatic na hindi na kasama sa PWD coverage para sa application o renewal. Dahil dito, hindi na sila maaaring mag-apply ng bagong PWD ID o mag-renew ng existing PWD ID."
      tagalogTitle="Paano mag-renew ng PWD ID"
      englishTitle="How to renew a PWD ID"
      tagalogSteps={tagalogSteps}
      englishSteps={englishSteps}
    />
  );
}
