export function removeDuplicates<T, K extends keyof T>(arr: T[], key: K): T[] {
  const seen = new Set<T[K]>()
  const result: T[] = []

  for (const item of arr) {
    const keyValue = item[key]
    if (!seen.has(keyValue)) {
      seen.add(keyValue)
      result.push(item)
    }
  }

  return result
}
