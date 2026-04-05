import { PageHero, SurfaceCard } from "../components/PageComponents";

const officers = [
  { name: "John Andrei B. Nicolas", position: "President" },
  { name: "Nancy Franco", position: "Vice President" },
  { name: "Fe Torres", position: "Secretary" },
  { name: "Patricia Castro", position: "Treasurer" },
  { name: "Florencio Salvador", position: "Auditor" },
  { name: "Maricel Martin", position: "PIO" },
  { name: "Daniel Palo", position: "PIO" },
  { name: "Kon. Anna Lalu", position: "Council" },
];

export default function OfficersPage() {
  return (
    <div className="space-y-6">
      <PageHero
        badge="Community officers"
        title="Meet the officers supporting the local PWD community"
        description="These are the current officers listed in the portal."
      >
      </PageHero>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {officers.map((officer) => (
          <SurfaceCard key={officer.name} className="p-5">
            <div className="flex flex-col items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-100 text-2xl font-bold text-sky-800">
                {officer.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-950">{officer.name}</h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
                  {officer.position}
                </p>
              </div>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </div>
  );
}
