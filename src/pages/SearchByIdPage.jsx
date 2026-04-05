import { useState } from "react";
import {
  FormField,
  PageHero,
  PrimaryButton,
  StatusPanel,
  SurfaceCard,
  TextInput,
} from "../Components/PageComponents";
import RecordSearchResults from "../Components/RecordSearchResults";
import usePwdRecords from "../hooks/usePwdRecords";

function normalizePwdNumber(value) {
  return value.replace(/-/g, "").trim();
}

export default function SearchByIdPage() {
  const { records, loading, error } = usePwdRecords();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const handleSearch = () => {
    const normalizedQuery = normalizePwdNumber(query);

    if (!normalizedQuery) {
      setValidationMessage("Enter a PWD number before searching.");
      setSearched(false);
      return;
    }

    setValidationMessage("");
    setSearched(true);
    setResults(
      records.filter((record) =>
        normalizePwdNumber(record.pwdNumber).includes(normalizedQuery),
      ),
    );
  };

  return (
    <div className="space-y-6">
      <PageHero
        badge="Search records"
        title="Find a PWD record by card number"
        description="Use the full PWD number when possible for the quickest and most accurate result."
      >
        {/* <BackButton to="/" /> */}
      </PageHero>

      <SurfaceCard>
        <form
          className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto]"
          onSubmit={(event) => {
            event.preventDefault();
            handleSearch();
          }}
        >
          <FormField
            label="PWD number"
            htmlFor="pwd-number"
            hint="Hyphens are optional."
          >
            <TextInput
              id="pwd-number"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Enter PWD number"
              inputMode="numeric"
            />
          </FormField>

          <div className="flex items-start lg:pt-[1.9rem]">
            <PrimaryButton type="submit" className="min-h-10 justify-center px-5 py-2 text-sm">
              Search record
            </PrimaryButton>
          </div>
        </form>

        <div className="mt-5 space-y-3">
          {validationMessage ? (
            <StatusPanel title={validationMessage} tone="amber" />
          ) : null}
          {loading ? (
            <StatusPanel
              title="Loading records"
              description="Please wait while the portal reads the PWD registry."
            />
          ) : null}
          {error ? <StatusPanel title={error} tone="rose" /> : null}
        </div>
      </SurfaceCard>

      <RecordSearchResults
        searched={searched}
        results={results}
        summary={`${results.length} matching record${results.length === 1 ? "" : "s"} found`}
        mobileTitle={(record) => record.pwdNumber}
        columns={[
          { key: "pwdNumber", label: "PWD number", render: (record) => record.pwdNumber },
          {
            key: "name",
            label: "Name",
            render: (record) => `${record.last}, ${record.first} ${record.middle}`,
          },
        ]}
      />
    </div>
  );
}
