import { createElement } from "react";
import {
  Activity,
  BadgeInfo,
  BedDouble,
  Calendar,
  HeartPulse,
  House,
  IdCard,
  Phone,
  UserRound,
} from "lucide-react";
import { useLocation, useParams } from "react-router-dom";
import {
  BackButton,
  PageHero,
  PrimaryButton,
  SectionHeading,
  StatusPanel,
  SurfaceCard,
} from "../Components/PageComponents";
import usePwdRecords from "../hooks/usePwdRecords";
import { getRecordName, hasRecordValue } from "../lib/pwdRecords";

const detailFields = [
  { key: "birthday", label: "Birthday", icon: Calendar },
  {
    key: "age",
    label: "Age",
    icon: UserRound,
    format: (value) => (typeof value === "number" ? `${value} years old` : value),
  },
  { key: "cellphone", label: "Cellphone number", icon: Phone },
  { key: "disability", label: "Disability", icon: HeartPulse },
  { key: "address", label: "Address", icon: House },
  { key: "pwdNumber", label: "PWD number", icon: IdCard },
  { key: "dateIssued", label: "Date issued", icon: BadgeInfo },
  { key: "bedridden", label: "Bedridden", icon: BedDouble },
  { key: "civilStatus", label: "Civil status", icon: Activity },
];

function DetailCard({ icon: Icon, label, value }) {
  return (
    <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
          {createElement(Icon, { size: 22, "aria-hidden": "true" })}
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-base font-semibold leading-7 text-slate-900">
            {value}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function RecordDetailsPage() {
  const { state } = useLocation();
  const { id } = useParams();
  const { records, loading, error } = usePwdRecords();
  const record = state || records.find((entry) => String(entry.id) === id);

  if (loading && !record) {
    return (
      <StatusPanel
        title="Loading record details"
        description="Please wait while the profile is being prepared."
      />
    );
  }

  if (error && !record) {
    return <StatusPanel title={error} tone="rose" />;
  }

  if (!record) {
    return (
      <div className="space-y-6">
        <PageHero
          badge="Record details"
          title="Profile not available"
          description="The selected PWD record could not be found."
        />
        <StatusPanel
          tone="rose"
          title="No data available"
          description="Try searching again from the home page or open the record from the search results."
        />
      </div>
    );
  }

  const dohUrl = hasRecordValue(record.pwdNumber)
    ? `https://pwd.doh.gov.ph/tbl_pwd_id_verificationlist.php?csrf_token=ca91b390ea683149b73ba2f9dddd18f295fa5645fc54c667ff469187772f4142&cmd=search&t=tbl_pwd_id_verification&z_pwd_id_number=%3D&x_pwd_id_number=${record.pwdNumber}`
    : "";

  return (
    <div className="space-y-6">
      <PageHero
        badge="Record details"
        title={getRecordName(record)}
        description="Review the information below before using it for verification or follow-up with the barangay office."
      >
        <BackButton />
        {dohUrl ? (
          <a href={dohUrl} target="_blank" rel="noreferrer">
            <PrimaryButton tone="amber">Check in DOH</PrimaryButton>
          </a>
        ) : null}
      </PageHero>

      <SurfaceCard>
        <SectionHeading
          title="Profile summary"
          description="Important information is grouped into readable cards for faster checking on desktop and mobile."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {detailFields.map(({ key, label, icon, format }) => (
            <DetailCard
              key={key}
              icon={icon}
              label={label}
              value={format ? format(record[key]) : record[key]}
            />
          ))}
        </div>
      </SurfaceCard>

      {hasRecordValue(record.notes) ? (
        <SurfaceCard>
          <SectionHeading
            title="Additional notes"
            description="Office remarks or other supporting details."
          />
          <p className="text-base leading-7 text-slate-700">{record.notes}</p>
        </SurfaceCard>
      ) : null}
    </div>
  );
}
