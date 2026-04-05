import { useState } from "react";
import {
  FormField,
  PageHero,
  PrimaryButton,
  StatusPanel,
  SurfaceCard,
  TextInput,
} from "../components/PageComponents";
import RecordSearchResults from "../components/RecordSearchResults";
import usePwdRecords from "../hooks/usePwdRecords";

function matchesName(record, firstName, lastName) {
  const firstWords = record.first.toLowerCase().trim().split(/\s+/);
  const lastWords = record.last.toLowerCase().trim().split(/\s+/);
  const queryFirstWords = firstName.toLowerCase().trim().split(/\s+/).filter((word) => word.length >= 2);
  const queryLastWords = lastName.toLowerCase().trim().split(/\s+/).filter((word) => word.length >= 2);

  return (
    queryFirstWords.every((queryWord) =>
      firstWords.some((word) => word.startsWith(queryWord)),
    ) &&
    queryLastWords.every((queryWord) =>
      lastWords.some((word) => word.startsWith(queryWord)),
    )
  );
}

export default function SearchByNamePage() {
  const { records, loading, error } = usePwdRecords();
  const [firstQuery, setFirstQuery] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const handleSearch = () => {
    const normalizedFirst = firstQuery.trim();
    const normalizedLast = lastQuery.trim();

    if (normalizedFirst.length < 2 || normalizedLast.length < 2) {
      setValidationMessage("Enter at least 2 letters for both first name and last name.");
      setSearched(false);
      return;
    }

    setValidationMessage("");
    setSearched(true);
    setResults(
      records.filter((record) => matchesName(record, normalizedFirst, normalizedLast)),
    );
  };

  return (
    <div className="space-y-6">
      <PageHero
        badge="Search records"
        title="Find a PWD record by name"
        description="Type the first name and last name. Partial names work better when they have at least 2 letters."
      >
        {/* <BackButton to="/" /> */}
      </PageHero>

      <SurfaceCard>
        <form
          className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]"
          autoComplete="off"
          onSubmit={(event) => {
            event.preventDefault();
            handleSearch();
          }}
        >
          <FormField
            label="First name"
            htmlFor="first-name"
            hint="Example: Juan"
          >
            <TextInput
              id="first-name"
              type="text"
              name="search-first-name"
              value={firstQuery}
              onChange={(event) => setFirstQuery(event.target.value)}
              placeholder="Enter first name"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
            />
          </FormField>

          <FormField
            label="Last name"
            htmlFor="last-name"
            hint="Example: Dela Cruz"
          >
            <TextInput
              id="last-name"
              type="text"
              name="search-last-name"
              value={lastQuery}
              onChange={(event) => setLastQuery(event.target.value)}
              placeholder="Enter last name"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
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
        mobileTitle={(record) => `${record.first} ${record.middle} ${record.last}`}
        columns={[
          { key: "last", label: "Last name", render: (record) => record.last },
          { key: "first", label: "First name", render: (record) => record.first },
          { key: "middle", label: "Middle name", render: (record) => record.middle },
        ]}
      />
    </div>
  );
}
