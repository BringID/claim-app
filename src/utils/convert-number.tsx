function convertNumber(value: bigint): string {
  const BILLION = 1_000_000_000n;
  const MILLION = 1_000_000n;
  const THOUSAND = 1_000n;

  if (value >= BILLION) {
    return `${value / BILLION}B`;
  } else if (value >= MILLION) {
    return `${value / MILLION}M`;
  } else if (value >= THOUSAND) {
    return `${value / THOUSAND}K`;
  }

  return value.toString();
}

export default convertNumber