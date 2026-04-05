const SHEET_DATE_REGEX = /Date\((\d+),(\d+),(\d+)\)/;

const EMPTY_VALUE = "No record";

function normalizeCell(cell) {
  return cell?.v ?? EMPTY_VALUE;
}

export function parseSheetDate(value) {
  if (!value) return null;

  const match = SHEET_DATE_REGEX.exec(value);
  const parsedDate = match
    ? new Date(Number(match[1]), Number(match[2]), Number(match[3]))
    : new Date(value);

  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
}

export function formatSheetDate(value) {
  const parsedDate = parseSheetDate(value);

  if (!parsedDate) {
    return value || EMPTY_VALUE;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsedDate);
}

export function getAgeFromDate(value) {
  const birthDate = parseSheetDate(value);

  if (!birthDate) {
    return EMPTY_VALUE;
  }

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthOffset = today.getMonth() - birthDate.getMonth();

  if (
    monthOffset < 0 ||
    (monthOffset === 0 && today.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }

  return age;
}

export function mapPwdRecord(row, index) {
  return {
    id: index,
    last: normalizeCell(row.c[3]),
    first: normalizeCell(row.c[4]),
    middle: normalizeCell(row.c[5]),
    address: normalizeCell(row.c[6]),
    birthday: formatSheetDate(row.c[7]?.v),
    age: getAgeFromDate(row.c[7]?.v),
    cellphone: normalizeCell(row.c[9]),
    disability: normalizeCell(row.c[10]),
    pwdNumber: normalizeCell(row.c[11]),
    dateIssued: formatSheetDate(row.c[12]?.v),
    bedridden: normalizeCell(row.c[13]),
    status: normalizeCell(row.c[14]),
    civilStatus: normalizeCell(row.c[15]),
    notes: normalizeCell(row.c[16]),
  };
}

export async function fetchPwdRecords(sheetUrl) {
  if (!sheetUrl) {
    throw new Error("Missing sheet URL. Set VITE_SheetURL in the environment.");
  }

  const response = await fetch(sheetUrl);

  if (!response.ok) {
    throw new Error("Unable to load PWD records right now.");
  }

  const text = await response.text();
  const parsed = JSON.parse(text.slice(47, -2));

  return parsed.table.rows.map(mapPwdRecord);
}

export function getRecordName(record) {
  return [record.first, record.middle, record.last]
    .filter((part) => part && part !== EMPTY_VALUE)
    .join(" ");
}

export function hasRecordValue(value) {
  return Boolean(value) && value !== EMPTY_VALUE;
}

export { EMPTY_VALUE };
