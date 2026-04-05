import GuideTemplate from "../Components/GuideTemplate";

const tagalogSteps = [
  {
    title: "Magdala ng medical certificate",
    description:
      "Kung kitang-kita na ang kapansanan, karaniwan ay hindi na kailangan ang medical certificate.",
  },
  {
    title: "Magdala ng 2 pirasong 1x1 ID picture ng PWD",
    description:
      "Gumamit ng malinaw na litrato na may plain o puting background.",
  },
  {
    title: "Puwedeng representative ang mag-apply",
    description:
      "Kung hindi kayang pumunta ng PWD, puwedeng representative ang magpasa ng requirements.",
  },
  {
    title: "Guardian ang sasama kung minor ang PWD",
    description:
      "Ang guardian ang pupunta sa DSWD at kailangang may dalang valid ID.",
  },
];

const englishSteps = [
  {
    title: "Bring a medical certificate",
    description:
      "If the disability is visibly obvious, a medical certificate is usually not required.",
  },
  {
    title: "Bring 2 pieces of 1x1 ID photos",
    description: "Use a clear photo with a plain or white background.",
  },
  {
    title: "A representative may apply",
    description:
      "If the PWD cannot go personally, a representative may submit the requirements.",
  },
  {
    title: "A guardian should go for minor PWDs",
    description: "The guardian should go to the DSWD and bring a valid ID.",
  },
];

export default function ApplicationGuidePage() {
  return (
    <GuideTemplate
      badge="Application guide"
      title="PWD ID application requirements"
      description="Read both versions below before visiting the office so the application process is easier and faster."
      noticeTitle="Paalala para sa senior citizens"
      noticeDescription="Ang mga senior citizen ay automatic na hindi na kasama sa PWD coverage para sa application o renewal. Dahil dito, hindi na sila maaaring mag-apply ng bagong PWD ID o mag-renew ng existing PWD ID."
      tagalogTitle="Paano mag-apply ng PWD ID"
      englishTitle="How to apply for a PWD ID"
      tagalogSteps={tagalogSteps}
      englishSteps={englishSteps}
    />
  );
}
