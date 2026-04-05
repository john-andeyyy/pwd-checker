import { Link } from "react-router-dom";
import { SurfaceCard, StatusPanel } from "./PagePrimitives";

export default function SearchResults({
  searched,
  results,
  columns,
  summary,
  mobileTitle,
  actionLabel = "View details",
}) {
  if (!searched) {
    return null;
  }

  if (!results.length) {
    return (
      <StatusPanel
        tone="rose"
        title="No matching record found"
        description="Check the spelling and try again. If the problem continues, ask the barangay office to verify the record."
      />
    );
  }

  return (
    <SurfaceCard className="p-0">
      <div className="border-b border-slate-100 px-6 py-4">
        <p className="text-base font-semibold text-slate-900">{summary}</p>
        <p className="mt-1 text-sm text-slate-500">
          Tap a record to open the full profile.
        </p>
      </div>

      <div className="grid gap-4 p-4 md:hidden">
        {results.map((record) => (
          <article
            key={record.id}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
          >
            <h3 className="text-lg font-bold text-slate-950">{mobileTitle(record)}</h3>
            <dl className="mt-3 grid gap-3">
              {columns.map((column) => (
                <div key={column.key} className="flex items-start justify-between gap-4">
                  <dt className="text-sm font-medium text-slate-500">{column.label}</dt>
                  <dd className="text-right text-sm font-semibold text-slate-900">
                    {column.render(record)}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              to={`/details/${record.id}`}
              state={record}
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-2xl bg-sky-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-100"
            >
              {actionLabel}
            </Link>
          </article>
        ))}
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-slate-700"
                >
                  {column.label}
                </th>
              ))}
              <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {results.map((record) => (
              <tr key={record.id} className="align-top">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 text-sm text-slate-700">
                    {column.render(record)}
                  </td>
                ))}
                <td className="px-6 py-4">
                  <Link
                    to={`/details/${record.id}`}
                    state={record}
                    className="inline-flex min-h-10 items-center rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-900 transition hover:bg-sky-100 focus:outline-none focus:ring-4 focus:ring-sky-100"
                  >
                    {actionLabel}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SurfaceCard>
  );
}
