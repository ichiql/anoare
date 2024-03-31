export function percentize(
  value: number,
  min: number,
  max: number,
  decimalPlaces: number = 2
): string | undefined {
  if (min >= max || value < min || value > max || decimalPlaces < 0) {
    return undefined
  }

  const percent = ((value - min) / (max - min)) * 100
  const formattedPercent = percent.toFixed(decimalPlaces) + '%'
  return formattedPercent
}
